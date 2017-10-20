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

  modifications: Modification[] = [];
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
    this.modifications = await this.modificationService.getModificationsByType(packageId, mods, 1, 100);
  }
  
}

class SelectModfiicationType {
  public name: string;
  public modificationType: ModificationType;
  public selected: boolean = false;
}