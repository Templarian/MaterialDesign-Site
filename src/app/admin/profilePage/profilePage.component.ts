import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { IconService } from 'app/shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Observable } from 'rxjs';
import { Alias } from 'app/shared/models/alias.model';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { Router } from '@angular/router';
import { PackageType } from 'app/shared/enums/packageType.enum';

@Component({
  selector: 'mdi-admin-profile-page',
  templateUrl: './profilePage.component.html',
  styleUrls: ['./profilePage.component.scss'],
  providers: [
    LoginService,
    IconService,
    ModificationService
  ]
})
export class AdminProfilePageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public aliasName: string = '';
  public modifications: Modification[] = [];

  public disabledAlias: boolean = true;

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private modificationService: ModificationService,
    private router: Router
  ) {
    this.packages.push(new Package(PackageType.MaterialDesignIcons, "Material Design Icons"));
    this.packages.push(new Package(PackageType.MaterialDesignIconsLight, "Material Design Icons Light"));
    this.selectedPackage = this.packages[0];
  }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
    // Load Package
    this.selectPackage();
  }

  goBack () {
    this.router.navigateByUrl('/admin/index')
  }

  async logout () {
    await this.loginService.logout();
  }

  async selectPackage() {
    // Icons
    //this.icons = await this.iconService.getIcons(this.selectedPackage.id);
    //this.selectedIcon = this.icons[0];
    // Aliases
    this.modifications = await this.modificationService.getModificationsByType(this.selectedPackage.id, [
      ModificationType.IconAliasCreated
    ]);
  }

  async selectIcon() {
    this.selectedIcon = await this.iconService.getAdminIcon(this.selectedIcon.id);
  }

  validate() {
    for(let alias of this.selectedIcon.aliases) {
      if (this.aliasName == alias.name) {
        this.disabledAlias = true;
        return;
      }
    }
    this.disabledAlias = this.aliasName.length == 0;
  }

  async submitAlias() {
    await this.iconService.addAlias(this.selectedIcon, this.aliasName);
    this.selectedIcon.addAlias(new Alias(null, this.aliasName));
    this.aliasName = '';
    this.validate();
    // Aliases
    this.modifications = await this.modificationService.getModificationsByType(this.selectedPackage.id, [
      ModificationType.IconAliasCreated
    ]);
  }

  friendlyDate (date: Date) {
    if (typeof date == 'string') {
      date = new Date(date);
    }
    let months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day: string[] = ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
    return day[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  friendlyTime (dateStr: string) {
    let date = new Date(dateStr);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + '' + ampm;
    return strTime;
  }

}