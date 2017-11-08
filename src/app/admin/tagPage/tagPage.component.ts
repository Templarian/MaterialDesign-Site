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
import { TagService } from 'app/shared/tag.service';
import { Tag } from 'app/shared/models/tag.model';

@Component({
  selector: 'mdi-admin-tag-page',
  templateUrl: './tagPage.component.html',
  styleUrls: ['./tagPage.component.scss'],
  providers: [
    LoginService,
    IconService,
    TagService,
    ModificationService
  ]
})
export class AdminTagPageComponent {

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

  tags: Tag[] = [];

  selectedTag: Tag;
  
  previewIcons: Icon[] = [];

  async selectTag() {
    this.previewIcons = await this.iconService.getAdminIconsByTag(this.selectedPackage, this.selectedTag);
  }

  async selectPackage() {
    // Tags
    this.tags = await this.tagService.getAdminTags(this.selectedPackage.id);
    this.selectedTag = this.tags[0];
    this.selectTag();
    // Icons
    //this.icons = await this.iconService.getIcons(this.selectedPackage.id);
    //this.selectedIcon = this.icons[0];
    // Aliases
    //this.modifications = await this.modificationService.getModificationsByType(this.selectedPackage.id, [
    //  ModificationType.IconAliasCreated
    //]);
  }

  selectIcon() {

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