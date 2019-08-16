import { Component, Input, SimpleChanges } from '@angular/core';
import { LoginService } from 'app/admin/services/login.service';
import { TagService } from 'app/shared/tag.service';
import { Router } from '@angular/router';
import { Package } from 'app/shared/models/package.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { Icon } from 'app/shared/models/icon.model';
import { Modification } from '../models/modification.model';
import { UserService } from '../user.service';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'mdi-modification-table',
  templateUrl: './modificationTable.component.html',
  styleUrls: ['./modificationTable.component.scss'],
  providers: [
    LoginService,
    ModificationService,
    UserService,
    TagService
  ]
})
export class ModfiicationTableComponent {

  constructor(
    private loginService: LoginService,
    private modificationService: ModificationService,
    private userService: UserService,
    private tagService: TagService,
    private router: Router
  ) { }
  @Input('icon') icon: Icon = null
  page: number = 1;
  currentDate: string = '';
  modificationsByDate: GroupByDateModification[] = [];
  ModificationType: typeof ModificationType = ModificationType;
  tags: Tag[] = [];

  async loadModifications(icon: Icon) {
    this.tags = await this.tagService.getTags(icon.packageId);
    const mods = [
      ModificationType.IconCreated,
      ModificationType.IconDeleted,
      ModificationType.IconRenamed,
      ModificationType.IconDescriptionModified,
      ModificationType.IconModified,
      ModificationType.IconAliasCreated,
      ModificationType.IconAliasDeleted,
      ModificationType.IconAuthorModified,
      ModificationType.IconTagCreated,
      ModificationType.IconTagDeleted,
      ModificationType.IconPublished,
      ModificationType.IconWorkInProgress,
      ModificationType.IconLive,
      ModificationType.IconDeprecated
    ]
    this.modificationsByDate = [];
    let modifications = await this.modificationService.getAdminIconModificationsByType(icon.id, mods, this.page, 100);
    for (let m of modifications) {
      if (this.currentDate != this.friendlyDate(new Date(m.date))) {
        this.currentDate = this.friendlyDate(new Date(m.date));
        this.modificationsByDate.push(new GroupByDateModification(this.currentDate));
      }
      m.text = m.text.replace(/`([^`]+)`/g, function (m, m1) {
        return `<code>${m1}</code>`;
      });
      this.modificationsByDate[this.modificationsByDate.length - 1].modifications.push(m);
    }
  }

  async setVisible(entry: Modification) {
    entry.isVisible = true;
    await this.modificationService.setVisible(entry);
  }

  async setHidden(entry: Modification) {
    entry.isVisible = false;
    await this.modificationService.setVisible(entry);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadModifications(changes.icon.currentValue);
  }

  friendlyName(userId: number) {
    return `unknown (${userId})`;
  }

  friendlyModification(type: string) {
    switch (type) {
      case ModificationType.IconCreated:
        return 'Created';
      case ModificationType.IconDeleted:
        return 'Deleted';
      case ModificationType.IconRenamed:
        return 'Renamed';
      case ModificationType.IconPublished:
        return 'Published';
      case ModificationType.IconWorkInProgress:
        return 'Work in Progress';
      case ModificationType.IconLive:
        return 'Live';
      case ModificationType.IconDeprecated:
        return 'Deprecated';
      case ModificationType.IconDescriptionModified:
        return 'Description Modified'
      case ModificationType.IconModified:
        return 'Path Modified'
      case ModificationType.IconAliasCreated:
        return 'Alias Added';
      case ModificationType.IconAliasDeleted:
        return 'Alias Removed';
      case ModificationType.IconTagCreated:
        return 'Tag Added';
      case ModificationType.IconTagDeleted:
        return 'Tag Removed';
      case ModificationType.IconAuthorModified:
        return 'Assigned Author';
      default:
        return 'Unknown';
    }
  }

  friendlyTag(tagId: string) {
    const tag = this.tags.find(t => t.id === tagId);
    return tag ? tag.name : 'Unknown';
  }

  friendlyDate(date: Date) {
    let months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return day[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }

  friendlyTime(dateStr: string) {
    let date = new Date(dateStr);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + '' + ampm;
    return strTime;
  }

  friendlyUrl(str: string) {
    return str.replace(' ', '-');
  }

  friendlyReport(m: Modification) {
    return 'https://github.com/Templarian/MaterialDesign/issues/new?title=History&body=Reason%3A%0D%0A%0D%0A%0D%0A%5BView+History+Item%5D%28http%3A%2F%2Fmaterialdesignicons.com%2Fhistory%2F' + m.id + '%29';
  }
}

class GroupByDateModification {
  constructor(
    public date: string
  ) { }
  public modifications: Modification[] = [];
}