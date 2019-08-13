import { Component, ViewChild } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { UserService } from 'app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Style } from 'app/shared/models/style.model';
import { SelectIconModal } from 'app/shared/selectIconModal/selectIconModal.component';
import { User } from 'app/shared/models/user.model';
import { FontVersion } from 'app/shared/models/fontVersion.model';
import { Font } from 'app/shared/models/font.model';
import { AssignUserModal } from 'app/shared/assignUserModal/assignUserModal.component';
import { Alias } from 'app/shared/models/alias.model';
import { Tag } from 'app/shared/models/tag.model';
import { ConfirmModal } from 'app/shared/confirmModal/confirmModal.component';
import { AliasService } from 'app/shared/alias.service';
import { TagService } from 'app/shared/tag.service';
import { AssignTagModal } from 'app/shared/assignTagModal/assignTagModal.component';
import { AssignAliasModal } from 'app/shared/assignAliasModal/assignAliasModal.component';

@Component({
  selector: 'mdi-admin-icons-page',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    LoginService,
    IconService,
    UserService,
    AliasService,
    TagService
  ]
})
export class AdminIconsPageComponent {

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private userService: UserService,
    private aliasService: AliasService,
    private tagService: TagService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const pack = this.route.snapshot.data['package'];
    if (pack) {
      this.selectedPackage = this.packages.find(p => p.id === pack.id);
    } else {
      this.selectedPackage = this.packages[0];
    }
  }
  @ViewChild('newIconName') newIconName;
  public packages: Package[] = [];
  public users: User[] = [];
  public selectedUser: User = null;
  public selectedPackage: Package = null;
  public fonts: Font[] = [];
  public selectedFont: Font = null;
  public versions: FontVersion[] = [];
  public selectedFontVersion: FontVersion = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public icon: Icon = null;
  public newIcon: Icon = null;
  public editIcon: Icon = null;
  public styles: Style[] = null;
  public loading: boolean = true;
  public baseIcon: Icon = null;
  public issue: string = null;
  private noIcon = 'M0,0H24V24H0V0M2,2V22H22V2H2M11,5H13V15H11V5M11,17H13V19H11V17Z';

  async ngOnInit() {
    await this.loginService.isAuthed();
    this.packages = await this.iconService.getAdminPackages();
    this.selectedPackage = this.packages[0];
    this.users = await this.userService.getAdminUsers(this.selectedPackage.id);
    const currentUser = await this.loginService.getAdmin();
    this.selectedUser = this.users.find(u => u.id === currentUser.id);
    this.styles = await this.iconService.getStyles(this.selectedPackage.id);
  }

  goBack() {
    this.router.navigateByUrl('/admin/index')
  }

  async logout() {
    await this.loginService.logout();
  }

  async selectPackage() {
    // User Select
    this.users = await this.userService.getAdminUsers(this.selectedPackage.id);
    this.selectedUser = this.users[0];
    // Icons Search component is smart now
    // this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
    // this.selectedIcon = this.icons[0];
    this.styles = await this.iconService.getStyles(this.selectedPackage.id);
  }

  selectFont() {

  }

  selectFontVersion() {
    
  }

  async selectUser() {

  }

  async selectIcon() {
    this.loading = true;
    this.icon = await this.iconService.getAdminIcon(this.selectedIcon.id);
    this.editIcon = new Icon().from(this.icon);
    if (this.icon.baseIconId) {
      this.baseIcon = await this.iconService.getAdminIcon(this.icon.baseIconId);
    } else {
      this.baseIcon = null;
    }
    this.loading = false;
    this.newIcon = null;
  }

  async addIcon() {
    this.editIcon = null;
    this.selectedIcon = null;
    this.newIcon = new Icon("", this.noIcon);
    this.newIcon.packageId = this.selectedPackage.id;
    this.newIcon.published = true;
    this.fonts = await this.iconService.getAdminFonts(this.selectedPackage.id);
    this.selectedFont = this.fonts[0];
    this.versions = this.selectedFont.versions;
    this.selectedFontVersion = this.versions[0];
  }

  async submitIcon() {
    try {
      const icon = await this.iconService.getIconByName(this.newIcon.packageId, this.newIcon.name);
      console.log(icon);
      alert('Icon name already exists!');
    } catch (e) {
      try {
        await this.iconService.addIcon(this.newIcon, this.selectedUser, this.issue);
        this.cancelIcon();
      } catch (ee) {
        alert('Failed to add icon... not sure why.');
      }
    }
  }

  isIssueInvalid(){
    if (this.issue === null || this.issue === '') {
      return false;
    }
    if(this.issue.match(/#/)) {
      return true;
    }
    return false;
  }

  cancelIcon() {
    this.newIcon = null;
    this.issue = null;
  }

  async updateDescription() {
    this.icon = await this.iconService.updateDescription(this.editIcon, this.selectedUser);
    this.editIcon = new Icon().from(this.icon);
  }

  async updateData() {
    this.icon = await this.iconService.updateData(this.editIcon, this.selectedUser);
    this.editIcon = new Icon().from(this.icon);
  }

  setBaseIcon() {
    const modal = this.modalService.open(SelectIconModal);
    modal.componentInstance.packageId = this.selectedPackage.id;
    modal.componentInstance.baseIconId = this.editIcon.baseIconId;
    modal.result.then(async (result) => {
      const icon = await this.iconService.setBaseIconId(this.editIcon, result);
      this.editIcon.baseIconId = icon.baseIconId;
      this.baseIcon = await this.iconService.getAdminIcon(this.editIcon.baseIconId);
    }, (reason) => {
      // dismissed
    });
  }

  inStyle(id) {
    return this.editIcon.styles.find(s => s.id == id) != null;
  }

  async toggleStyle(style: Style) {
    this.loading = true;
    const icon = await this.iconService.toggleStyle(this.editIcon, style);
    this.editIcon.styles = icon.styles;
    this.loading = false;
  }

  optimizeEdit() {
    this.iconService.optimizeData(this.editIcon).then((icon) => {
      this.editIcon.data = icon.data;
      this.editIcon.expand();
      this.editIcon.cleanRounding();
    });
  }

  optimize() {
    this.iconService.optimizeData(this.newIcon).then((icon) => {
      this.newIcon.data = icon.data;
      this.newIcon.expand();
      this.newIcon.cleanRounding();
    });
  }

  validEditPath() {
    if (this.editIcon.data.match(/[a-y]/)) {
      return false;
    }
    return true;
  }

  validPath() {
    if (this.newIcon.data.match(/[a-y]/)) {
      return false;
    }
    return true;
  }

  pathChange(e) {
    console.log(this.newIcon.data);
  }

  pathError(e) {
    console.log(e, 'error');
  }

  async rename(){
    const updatedIcon = await this.iconService.rename(this.editIcon, this.selectedUser);
    this.selectedIcon.name = updatedIcon.name;
  }

  async assignUser() {
    const modal = this.modalService.open(AssignUserModal);
    modal.componentInstance.user = this.editIcon.user;
    modal.componentInstance.package = this.selectedPackage;
    modal.result.then(async (user) => {
      const icon = new Icon();
      icon.id = this.selectedIcon.id;
      icon.user = user;
      var updatedIcon = await this.iconService.updateUser(icon, this.selectedUser);
      this.editIcon.user = updatedIcon.user;
    }, (reason) => {
      // dismissed
    });
  }

  async removeAlias(alias: Alias) {
    const modal = this.modalService.open(ConfirmModal);
    modal.componentInstance.title = "Delete Alias";
    modal.componentInstance.description = "Are you sure you delete this alias?";
    modal.result.then(async () => {
      const updatedIcon =  await this.aliasService.deleteAlias(this.selectedIcon, alias);
      this.editIcon.aliases = updatedIcon.aliases;
    });
  }

  async removeTag(tag: Tag) {
    const modal = this.modalService.open(ConfirmModal);
    modal.componentInstance.title = "Delete Tag";
    modal.componentInstance.description = "Are you sure you delete this tag?";
    modal.result.then(async () => {
      const updatedIcon =  await this.tagService.deleteTag(this.selectedIcon, tag);
      this.editIcon.tags = updatedIcon.tags;
    });
  }

  addTag() {
    const modal = this.modalService.open(AssignTagModal);
    modal.componentInstance.package = this.selectedPackage;
    modal.result.then(async (tag: Tag) => {
      const updatedIcon = await this.tagService.assignTag(this.selectedIcon, tag);
      this.editIcon.tags = updatedIcon.tags;
    }, (reason) => {
      // dismissed
    });
  }

  addAlias() {
    const modal = this.modalService.open(AssignAliasModal);
    modal.componentInstance.package = this.selectedPackage;
    modal.result.then(async (name: string) => {
      const alias = new Alias();
      alias.name = name;
      const updatedIcon = await this.aliasService.assignAlias(this.selectedIcon, alias);
      this.editIcon.aliases = updatedIcon.aliases;
    }, (reason) => {
      // dismissed
    });
  }
}