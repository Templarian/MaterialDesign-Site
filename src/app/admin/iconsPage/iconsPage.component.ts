import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Package } from 'app/shared/models/package.model';
import { Icon } from 'app/shared/models/icon.model';
import { IconService } from 'app/shared/icon.service';
import { query } from '@angular/core/src/animation/dsl';

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

  async ngOnInit() {
    await this.loginService.isAuthed();
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
  }

  async selectIcon() {
    this.icon = await this.iconService.getAdminIcon(this.selectedIcon.id);
    this.editIcon = new Icon().from(this.icon);
  }

  addIcon() {
    this.editIcon = null;
  }

  async updateDescription() {
    this.icon = await this.iconService.updateDescription(this.editIcon);
    this.editIcon = new Icon().from(this.icon);
  }

}