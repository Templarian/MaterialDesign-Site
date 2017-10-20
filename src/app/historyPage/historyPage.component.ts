import { Component, Input } from '@angular/core';
import { Modification } from 'app/shared/models/modification.model';
import { ModificationService } from 'app/shared/modification.service';
import { ModificationType } from 'app/shared/enums/modificationType.enum';

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
    private modificationService: ModificationService
  ) {}

  modifications: Modification[];

  modificationTypes: SelectModfiicationType[] = [{
    name: 'News',
    icon: 'news',
    modificationType: ModificationType.News,
    selected: true
  }, {
    name: 'Webfont Released',
    icon: 'format-font',
    modificationType: ModificationType.WebfontPublished,
    selected: true
  }, {
    name: 'Icon Created',
    icon: 'new',
    modificationType: ModificationType.IconCreated,
    selected: true
  }, {
    name: 'Icon Modified',
    icon: '',
    modificationType: ModificationType.IconModified,
    selected: true
  }, {
    name: 'Icon Renamed',
    icon: '',
    modificationType: ModificationType.IconRenamed,
    selected: true
  }, {
    name: 'Icon Modified',
    icon: '',
    modificationType: ModificationType.IconDeleted,
    selected: true
  }, {
    name: 'Alias Created',
    icon: '',
    modificationType: ModificationType.AliasCreated,
    selected: false
  }];

  async ngOnInit() {
    //this.modifications = await this.modificationService.getModificationsByType('', []);
    let mods: string[] = [];
  }

  async toggle (modificationType: SelectModfiicationType) {
    modificationType.selected = !modificationType.selected;
  }
  
}

class SelectModfiicationType {
  public name: string;
  public modificationType: ModificationType;
  public selected: boolean = false;
  public icon: string;
}