import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IconService } from '../shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';

@Component({
  selector: 'mdi-icons',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    IconService
  ]
})
export class IconsPageComponent {

  collapsed: boolean = false;
  size: number = 36;
  iconsCache: Icon[] = [];
  icons: Icon[] = [];
  errorMessage: any;

  constructor(private route: ActivatedRoute,
    private iconService: IconService) {

  }

  async loadContent(data) {
    let icons = await this.iconService.getIcons(data.package);
    this.iconsCache = icons;
    this.icons = this.iconsCache;
  }

  search: string = '';
  searchChanged() {
    this.icons = this.iconsCache.filter(icon => {
      return icon.name.indexOf(this.search) != -1;
    });
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(x => this.loadContent(x))
  }

}
