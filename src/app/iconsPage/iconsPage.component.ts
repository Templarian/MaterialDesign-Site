import { Component, Input, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';
import { IconService } from '../shared/icon.service';
import { Icon } from 'app/shared/models/icon.model';
import { Tag } from 'app/shared/models/tag.model';
import { TagService } from 'app/shared/tag.service';
import { PackageType } from '../shared/enums/packageType.enum';

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
  @ViewChild('sidebarTags') sidebarTags;
  @ViewChild('content') content;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private iconService: IconService,
    private tagService: TagService
  ) {

  }

  hasVertical: boolean = document.body.scrollHeight > window.innerHeight;
  hasScrolled: boolean = false;
  hasFull: boolean = false;
  listOffset: number = 0;
  boundingSidebarTags: any = { top: 0 };
  isIconsLoading: boolean = true;
  isCheatsheet: boolean = false;
  PackageType = PackageType;
  packageId: PackageType = PackageType.MaterialDesignIcons;

  setHasVertical() {
    if (this.boundingSidebarTags.top == 0) {
      this.boundingSidebarTags = this.sidebarTags.nativeElement.getBoundingClientRect();
    }
    this.hasVertical = document.body.scrollHeight > window.innerHeight;
    if (window.scrollY >= this.boundingSidebarTags.top) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
    this.hasFull = document.body.scrollHeight - window.innerHeight > 150
      && document.body.scrollHeight - window.innerHeight - window.scrollY > 60;
  }

  @HostListener('window:scroll', ['$event'])
  trackScroll(event) {
    //console.dir("Scroll Event", event);
    this.setHasVertical();
  }

  @HostListener('window:resize', ['$event'])
  trackResize(event) {
    //console.dir("Resize Event", event);
    this.setHasVertical();
  }

  async loadContent(data) {
    this.packageId = data.package;
    let icons = await this.iconService.getIcons(data.package);
    this.isIconsLoading = false;
    this.iconsCache = icons;
    this.icons = this.iconsCache;
    if (this.tagUrl) {
      this.searchChanged();
    }
    this.tags = await this.tagService.getTags(data.package);
    this.setHasVertical();
    this.boundingSidebarTags = this.sidebarTags.nativeElement.getBoundingClientRect();
  }

  search: string = '';
  searchChanged() {
    let s = this.search.toLowerCase();
    this.icons = this.iconsCache.filter(icon => {
      if (this.tagUrl != null) {
        let tagUrls = icon.tags.map(t => t.url);
        let tagExists = false;
        for (let tagUrl of tagUrls) {
          if (this.tagUrl == tagUrl) {
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

  switchPackage(packageId: PackageType) {
    if (this.packageId !== packageId) {
      switch(packageId) {
        case PackageType.MaterialDesignIcons:
          this.router.navigateByUrl('/icons');
          break;
        case PackageType.MaterialDesignIconsLight:
          this.router.navigateByUrl('/icons/light');
          break;
        default:
          throw 'Invalid package';
      }
    }
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
          this.setHasVertical();
        }
      });
  }

}
