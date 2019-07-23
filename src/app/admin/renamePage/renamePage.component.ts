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

@Component({
  selector: 'mdi-admin-rename-page',
  templateUrl: './renamePage.component.html',
  styleUrls: ['./renamePage.component.scss'],
  providers: [
    LoginService,
    IconService,
    ModificationService
  ]
})
export class AdminRenamePageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public renameText: string = '';
  public modifications: Modification[] = [];

  public disabledRename: boolean = true;

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private modificationService: ModificationService
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
    // Icons
    this.icons = await this.iconService.getIcons(this.selectedPackage.id);
    //this.selectedIcon = this.icons[0];
  }

  selectIcon() {

  }

  validate() {
    for(let icon of this.icons) {
      if (this.renameText == icon.name) {
        this.disabledRename = true;
        return;
      }
    }
    this.disabledRename = this.renameText.length < 3;
  }

  async submitRename() {
    //this.selectIcon.name = this.renameText;
    //await this.iconService.rename(this.selectedIcon,);
    this.selectedIcon.name = this.renameText;
    this.renameText = '';
    this.selectedIcon = null;
    this.validate();
  }

}