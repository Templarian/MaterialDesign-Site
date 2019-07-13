import { Component, ViewChild } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Style } from 'app/shared/models/style.model';
import { SelectIconModal } from 'app/shared/selectIconModal/selectIconModal.component';

@Component({
  selector: 'mdi-admin-icons-page',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    LoginService,
    IconService
  ]
})
export class AdminIconsPageComponent {

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.packages.push(new Package("38EF63D0-4744-11E4-B3CF-842B2B6CFE1B", "Material Design Icons"));
    this.packages.push(new Package("531A9B44-1962-11E5-89CC-842B2B6CFE1B", "Material Design Icons Light"));
    const pack = this.route.snapshot.data['package'];
    if (pack) {
      this.selectedPackage = this.packages.find(p => p.id === pack.id);
    } else {
      this.selectedPackage = this.packages[0];
    }
  }
  @ViewChild('newIconName') newIconName;
  public packages: Package[] = [];
  public selectedPackage: Package = null;
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
    this.styles = await this.iconService.getStyles(this.selectedPackage.id);
  }

  goBack() {
    this.router.navigateByUrl('/admin/index')
  }

  async logout() {
    await this.loginService.logout();
  }

  async selectPackage() {
    // Icons
    // this.icons = await this.iconService.getAdminIcons(this.selectedPackage.id);
    // this.selectedIcon = this.icons[0];
    this.styles = await this.iconService.getStyles(this.selectedPackage.id);
  }

  async selectIcon() {
    this.loading = true;
    this.icon = await this.iconService.getAdminIcon(this.selectedIcon.id);
    this.editIcon = new Icon().from(this.icon);
    this.baseIcon = await this.iconService.getAdminIcon(this.icon.baseIconId);
    this.loading = false;
    this.newIcon = null;
  }

  addIcon() {
    this.editIcon = null;
    this.selectedIcon = null;
    this.newIcon = new Icon("", this.noIcon);
    this.newIcon.packageId = this.selectedPackage.id;
    this.newIcon.published = false;
  }

  async submitIcon() {
    try {
      const icon = await this.iconService.getIconByName(this.newIcon.packageId, this.newIcon.name);
      alert('Icon name already exists!');
    } catch (e) {
      try {
        await this.iconService.addIcon(this.newIcon, this.issue);
        this.cancelIcon();
      } catch (ee) {
        alert('Failed to add icon... not sure why.');
      }
    }
  }

  cancelIcon() {
    this.newIcon = null;
    this.issue = null;
  }

  async updateDescription() {
    this.icon = await this.iconService.updateDescription(this.editIcon);
    this.editIcon = new Icon().from(this.icon);
  }

  async updateData() {
    this.icon = await this.iconService.updateData(this.editIcon);
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
    // this.editIcon.data = this.editIcon.optimizePath();
    this.iconService.optimizeData(this.editIcon).then((result) => {
      console.log(result);
    });
  }

  optimize() {
    this.newIcon.data = this.newIcon.optimizePath();
  }

  pathChange(e) {
    console.log(this.newIcon.data);
  }

  pathError(e) {
    console.log(e, 'error');
  }

}