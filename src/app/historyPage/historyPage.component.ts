import { Component, Input } from '@angular/core';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mdi-history-page',
  templateUrl: './historyPage.component.html',
  styleUrls: ['./historyPage.component.scss'],
  providers: [
    ModificationService
  ]
})
export class HistoryPageComponent {
  title: string = 'History';

  constructor(
    private modificationService: ModificationService,
    private route: ActivatedRoute,
    private html: DomSanitizer
  ) {}

  modificationsByDate: GroupByDateModification[] = [];
  modificationType = ModificationType;

  modificationTypes: SelectModfiicationType[] = [{
    name: 'News',
    modificationType: ModificationType.News,
    selected: true,
    className: 'history-news'
  }, {
    name: 'Webfont Published',
    modificationType: ModificationType.WebfontPublished,
    selected: true,
    className: 'history-webfont-published'
  }, {
    name: 'Icon Created',
    modificationType: ModificationType.IconCreated,
    selected: true,
    className: 'history-icon-created'
  }, {
    name: 'Icon Modified',
    modificationType: ModificationType.IconModified,
    selected: true,
    className: 'history-icon-modified'
  }, {
    name: 'Icon Renamed',
    modificationType: ModificationType.IconRenamed,
    selected: true,
    className: 'history-icon-renamed'
  }, {
    name: 'Icon Deleted',
    modificationType: ModificationType.IconDeleted,
    selected: true,
    className: 'history-icon-deleted'
  }, {
    name: 'Alias Created',
    modificationType: ModificationType.AliasCreated,
    selected: false,
    className: 'history-alias-created'
  }];

  getClassName (type: ModificationType) {
    return this.modificationTypes.filter(m => m.modificationType == type)[0].className;
  }

  async ngOnInit() {
    let mods: string[] = [];
    await this.toggle();
  }

  async toggle (modificationType?: SelectModfiicationType) {
    if (modificationType) {
      modificationType.selected = !modificationType.selected;
    }
    this.modificationsByDate = [];
    let packageId = this.route.snapshot.data['package'];
    let mods = this.modificationTypes.filter(m => m.selected).map(m => m.modificationType);
    let modifications = await this.modificationService.getModificationsByType(packageId, mods, 1, 100);
    let currentDate = '';
    for (let m of modifications) {
      if (currentDate != this.friendlyDate(new Date(m.date))) {
        currentDate = this.friendlyDate(new Date(m.date));
        this.modificationsByDate.push(new GroupByDateModification(currentDate));
      }
      this.modificationsByDate[this.modificationsByDate.length - 1].modifications.push(m);
    }

  }

  friendlyDate (date: Date) {
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

  friendlyUrl (str: string) {
    return str.replace(' ', '-');
  }
  
}

class SelectModfiicationType {
  public name: string;
  public modificationType: ModificationType;
  public selected: boolean = false;
  public className: string;
}

class GroupByDateModification {
  constructor (
    public date: string
  ) {}
  public modifications: Modification[] = [];
}