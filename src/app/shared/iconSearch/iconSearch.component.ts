import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { IconService } from 'app/shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Package } from 'app/shared/models/package.model';
import { Observable } from 'rxjs/Observable';
import { Alias } from 'app/shared/models/alias.model';

@Component({
  selector: 'mdi-icon-search',
  templateUrl: './iconSearch.component.html',
  styleUrls: ['./iconSearch.component.scss'],
  providers: [
    IconService
  ]
})
export class IconSearchComponent {
  @Input('icon') icon: Icon;
  @Output('iconChange') iconChange: EventEmitter<Icon> = new EventEmitter<Icon>();
  @Input('icons') icons: Icon[];
  @Input('multiple') multiple: boolean = false;
  @Input('package') package: Package;

  constructor(
    private iconService: IconService
  ) { }

  s: string = '';

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term === '' ? []
        : this.selectableIcons.filter(v => {
          if (v.name.indexOf(term.toLowerCase()) > -1) {
            return true;
          }
          for (let a of v.aliases) {
            if (a.name.indexOf(term.toLowerCase()) > -1) {
              return true;
            }
          }
          return false;
        }).slice(0, 10));

  formatter = (x: Icon) => {
    this.icon = x;
    this.iconChange.emit(this.icon);
    return x.name;
  };
  selectableIcons: Icon[] = [];

  async ngOnInit() {
    var icons = await this.iconService.getIcons(this.package.id);
    this.selectableIcons = icons;
  }
}

class SelectableIcon extends Icon {

  constructor(icon: Icon) {
    super(icon.name, icon.data);
  }

  public selected: boolean = false;

}