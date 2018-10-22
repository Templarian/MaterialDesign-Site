import { Component, Input } from '@angular/core';
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

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public icon: Icon = null;
  public editIcon: Icon = null;
  public styles: Style[] = null;
  public loading: boolean = true;

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
    this.loading = false;
  }

  addIcon() {
    this.editIcon = null;
  }

  async updateDescription() {
    this.icon = await this.iconService.updateDescription(this.editIcon);
    this.editIcon = new Icon().from(this.icon);
  }

  setBaseIcon() {
    const modal = this.modalService.open(SelectIconModal);
    modal.componentInstance.packageId = this.selectedPackage.id;
    modal.componentInstance.baseIconId = this.editIcon.baseIconId;
    modal.result.then((result) => {
      this.iconService.setBaseIconId(this.editIcon, result);
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

}