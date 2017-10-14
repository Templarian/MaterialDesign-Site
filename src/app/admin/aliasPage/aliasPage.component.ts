import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { IconService } from 'app/shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Observable } from 'rxjs';

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
  public selectedIcon: Icon;

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

}