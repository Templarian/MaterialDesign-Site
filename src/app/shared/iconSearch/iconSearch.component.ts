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
  @Input('exclude') exclude: Icon[] = [];
  @Input('multiple') multiple: boolean = false;
  @Input('package') package: Package;

  constructor(
    private iconService: IconService
  ) { }

  s: Icon = null;
  isDisabled: boolean = true;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term === '' ? []
        : this.selectableIcons.filter(v => {
          let ex: string[] = this.exclude.map(i => i.id);
          if (ex.indexOf(v.id) != -1) {
            return false;
          }
          if (v.name.indexOf(term.toLowerCase()) > -1) {
            return true;
          }
          for (let a of v.aliases) {
            if (a.name.indexOf(term.toLowerCase()) > -1) {
              return true;
            }
          }
          return false;
        }).sort((a, b) => {
          return a.name == term ? -1 : 1;
        }).slice(0, 10));

  formatter = (x: Icon) => {
    this.icon = x;
    this.iconChange.emit(this.icon);
    return x.name;
  };

  iconList: Icon[] = [];
  selectableIcons: Icon[] = [];

  async ngOnInit() {
    this.iconList = await this.iconService.getAdminIcons(this.package.id);
    let ex: string[] = this.exclude.map(i => i.id);
    this.selectableIcons = this.iconList.filter(i => {
      return !(ex.indexOf(i.id) > -1);
    });
    this.isDisabled = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.icon) {
      if (changes.icon.currentValue == null) {
        this.s = null;
      }
    }
  }
}

class SelectableIcon extends Icon {

  constructor(icon: Icon) {
    super(icon.name, icon.data);
  }

  public selected: boolean = false;

}