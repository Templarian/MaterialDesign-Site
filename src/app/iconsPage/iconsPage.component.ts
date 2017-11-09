import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
    private iconService: IconService,
    private tagService: TagService
  ) {

  }

  async loadContent(data) {
    let icons = await this.iconService.getIcons(data.package);
    this.iconsCache = icons;
    this.icons = this.iconsCache;
    if (this.tagUrl) {
      this.searchChanged();
    }
    this.tags = await this.tagService.getTags(data.package);
  }

  search: string = '';
  searchChanged() {
    let s = this.search.toLowerCase();
    this.icons = this.iconsCache.filter(icon => {
      if (this.tagUrl != null) {
        let tagUrls = icon.tags.map(t => t.url);
        let tagExists = false;
        for (let tagUrl of tagUrls) {
          if (this.tagUrl.indexOf(tagUrl) != -1) {
            tagExists = true;
            break;
          }
        }
        if (!tagExists) {
          return false;
        }
      }
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

  tagUrl: string = null;

  ngOnInit() {
    this.tagUrl = this.route.snapshot.params['tagUrl'] || null;
    this.route
      .data
      .subscribe(x => this.loadContent(x));

      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.tagUrl = this.route.snapshot.params['tagUrl'] || null;
          this.searchChanged();
          document.body.scrollIntoView();
        }
      });
  }

}
