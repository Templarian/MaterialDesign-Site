import { Component, Input } from '@angular/core';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}

  modificationsByDate: GroupByDateModification[] = [];
  modificationType = ModificationType;

  modificationTypes: SelectModfiicationType[] = [{
    name: 'News',
    modificationType: ModificationType.News,
    selected: true
  }, {
    name: 'Webfont Published',
    modificationType: ModificationType.WebfontPublished,
    selected: true
  }, {
    name: 'Icon Created',
    modificationType: ModificationType.IconCreated,
    selected: true
  }, {
    name: 'Icon Modified',
    modificationType: ModificationType.IconModified,
    selected: true
  }, {
    name: 'Icon Renamed',
    modificationType: ModificationType.IconRenamed,
    selected: true
  }, {
    name: 'Icon Deleted',
    modificationType: ModificationType.IconDeleted,
    selected: true
  }, {
    name: 'Alias Created',
    modificationType: ModificationType.AliasCreated,
    selected: false
  }];

  async ngOnInit() {
    let mods: string[] = [];
    await this.toggle();
  }

  async toggle (modificationType?: SelectModfiicationType) {
    if (modificationType) {
      modificationType.selected = !modificationType.selected;
    }
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
  
}

class SelectModfiicationType {
  public name: string;
  public modificationType: ModificationType;
  public selected: boolean = false;
}

class GroupByDateModification {
  constructor (
    public date: string
  ) {}
  public modifications: Modification[] = [];
}