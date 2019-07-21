import { Component, Input } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { Package } from 'app/shared/models/package.model';
import { IconService } from 'app/shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { TagService } from 'app/shared/tag.service';
import { Tag } from 'app/shared/models/tag.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mdi-admin-release-page',
  templateUrl: './releasePage.component.html',
  styleUrls: ['./releasePage.component.scss'],
  providers: [
    LoginService,
    IconService,
    TagService
  ]
})
export class AdminReleasePageComponent {

  public packages: Package[] = [];
  public selectedPackage: Package = null;
  public icons: Icon[];
  public selectedIcon: Icon = null;
  public aliasName: string = '';
  public modifications: Modification[] = [];

  public disabledTag: boolean = false;

  constructor(
    private loginService: LoginService,
    private iconService: IconService,
    private tagService: TagService,
    private router: Router
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

  goBack () {
    this.router.navigateByUrl('/admin/index')
  }

  async logout () {
    await this.loginService.logout();
  }

  tags: Tag[] = [];

  selectedTag: Tag;
  
  previewIcons: Icon[] = [];

  async selectTag() {
    this.previewIcons = await this.iconService.getAdminIconsByTag(this.selectedPackage, this.selectedTag);
  }

  async selectPackage() {
    
  }

  async selectIcon() {
    this.selectedIcon = await this.iconService.getAdminIcon(this.selectedIcon.id);
  }

  validate() {
    for(let alias of this.selectedIcon.aliases) {
      if (this.aliasName == alias.name) {
        this.disabledTag = true;
        return;
      }
    }
    this.disabledTag = this.aliasName.length == 0;
  }

  async submitTag() {
    let tag = await this.iconService.addTag(this.selectedIcon, this.selectedTag);
    this.selectedIcon.addTag(tag);
    this.selectedIcon = null;
    this.selectTag();
    //this.validate();
    // Aliases
    //this.modifications = await this.modificationService.getModificationsByType(this.selectedPackage.id, [
    //  ModificationType.IconAliasCreated
    //]);
  }

}