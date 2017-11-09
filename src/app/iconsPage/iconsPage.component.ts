import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IconService } from '../shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Tag } from 'app/shared/models/tag.model';
import { TagService } from 'app/shared/tag.service';

@Component({
  selector: 'mdi-icons',
  templateUrl: './iconsPage.component.html',
  styleUrls: ['./iconsPage.component.scss'],
  providers: [
    IconService,
    TagService
  ]
})
export class IconsPageComponent {

  collapsed: boolean = false;
  size: number = 36;
  iconsCache: Icon[] = [];
  icons: Icon[] = [];
  errorMessage: any;
  tags: Tag[] = [];

  constructor(
    private route: ActivatedRoute,
    private iconService: IconService,
    private tagService: TagService
  ) {

  }

  async loadContent(data) {
    let icons = await this.iconService.getIcons(data.package);
    this.iconsCache = icons;
    this.icons = this.iconsCache;
    this.tags = await this.tagService.getTags(data.package);
  }

  search: string = '';
  searchChanged() {
    let s = this.search.toLowerCase();
    this.icons = this.iconsCache.filter(icon => {
      if (icon.name.indexOf(s) != -1) {
        return true;
      }
      for (let alias of icon.aliases) {
        if (alias.name.indexOf(s) != -1) {
          return true;
        }
      }
      return false;
    });
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(x => this.loadContent(x))
  }

}
