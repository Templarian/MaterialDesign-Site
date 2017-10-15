import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { IconService } from 'app/shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Observable } from 'rxjs';
import { Alias } from 'app/shared/models/alias.model';

@Component({
  selector: 'mdi-admin-alias-page',
  templateUrl: './aliasPage.component.html',
  styleUrls: ['./aliasPage.component.scss'],
  providers: [
    LoginService,
    IconService
  ]
})
export class AdminAliasPageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public aliasName: string = '';

  public disabledAlias: boolean = true;

  constructor(
    private loginService: LoginService,
    private iconService: IconService
  ) {
    this.packages.push(new Package("38EF63D0-4744-11E4-B3CF-842B2B6CFE1B", "Material Design Icons"));
    this.packages.push(new Package("531A9B44-1962-11E5-89CC-842B2B6CFE1B", "Material Design Icons Light"));
    this.selectedPackage = this.packages[0];
  }

  async ngOnInit() {
    await this.loginService.isAuthed();
    // Authed
    console.log('authed');
    // Load Package
    this.selectPackage();
  }

  async selectPackage() {
    this.icons = await this.iconService.getIcons(this.selectedPackage.id);
    this.selectedIcon = this.icons[0];
  }

  selectIcon() {

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

  submitAlias() {
    let r = this.iconService.addAlias(this.selectedIcon, this.aliasName);
    this.selectedIcon.addAlias(new Alias(null, this.aliasName));
    this.aliasName = '';
    this.validate();
  }

}