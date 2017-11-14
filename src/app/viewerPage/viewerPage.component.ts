import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Event, NavigationEnd } from '@angular/router';
import { ViewerService } from './viewerPage.service';
import { IconService } from './../shared/icon.service';

import { Sidebar } from './sidebar/sidebar.model';
import { SidebarItem } from './sidebar/sidebarItem.model';
import { PopupService } from "@ng-bootstrap/ng-bootstrap/util/popup";
import { NgbTooltipWindow } from "@ng-bootstrap/ng-bootstrap/tooltip/tooltip";
import { MarkdownReplace } from "app/shared/markdown/markdown.component";

declare var Remarkable: any;
declare var hljs: any;

@Component({
  selector: 'mdi-viewer',
  templateUrl: './viewerPage.component.html',
  styleUrls: ['./viewerPage.component.scss'],
  providers: [
    ViewerService,
    IconService
  ]
})
export class ViewerPageComponent {
  @ViewChild('content') content;
  remarkable = new Remarkable({
    html: true
  });
  markdown: string = null;
  errorMessage: string;
  title: string = 'Loading...';
  file: string = 'error';
  url: string = '';
  linkIcon: string = 'M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z';
  sidebar: Sidebar;

  private _popupService: PopupService<NgbTooltipWindow>;

  constructor(public router: Router,
    public route: ActivatedRoute,
    private viewerService: ViewerService,
    private iconService: IconService) {
    this.url = route.snapshot.url.join('/');
    this.sidebar = new Sidebar(this.url, [
      new SidebarItem("home", "Loading...", "", "", "", [])
    ]);

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView();
          } else {
            let trying = 0;
            let clear = setInterval(x => {
              element = document.querySelector("#" + tree.fragment);
              if (element) {
                element.scrollIntoView();
                clearInterval(clear);
              }
              if (trying++ == 30) {
                clearInterval(clear);
              }
            }, 100);
          }
        }
      }
    });
  }

  icons: string[] = [];

  replace: MarkdownReplace[] = [{
    find: new RegExp('<h1>(.*)</h1>'),
    replace: (sub, h1) => {
      // Prevent double setting title
      setTimeout(() => this.title = h1);
      return '';
    }
  }, {
    find: new RegExp('<(h[2-6])>([^<]+)</h[2-6]>', 'g'),
    replace: (m1, m2, m3) => {
      let id = m3.toLowerCase().replace(/ /g, '-').replace(/\//, '');
      return `<${m2} id="${id}">
                ${m3}
                <a href="${this.url}#${id}" style="display:inline-block;vertical-align:middle;">
                  <svg viewBox="0 0 24 24" style="width:18px;height:18px;">
                    <path d="${this.linkIcon}" fill="#999" />
                  </svg>
                </a>
              </${m2}>`;
    }
  }, {
    find: new RegExp('mdi:([a-z0-9-]+)', 'g'),
    replace: (m, icon) => {
      if (icon == 'not' || icon == 'before') { return m; }
      this.icons.push(icon);
      return `<a href="icon/${icon}"><svg class="icon icon-spin" data-icon="${m}" viewBox="0 0 24 24"><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg></a>`;
    },
    render: async () => {
      let iconList = await this.iconService.getIconsByName('38EF63D0-4744-11E4-B3CF-842B2B6CFE1B', this.icons);
      this.icons.forEach(icon => {
        var ic = iconList.filter(x => x.name == icon);
        let meta = {
          data: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
          name: 'Could not find "' + icon + '"'
        };
        if (ic.length > 0) {
          meta = ic[0];
        }
        var svgs = document.querySelectorAll('svg[data-icon="mdi:' + icon + '"]');
        for (let i = 0; i < svgs.length; i++) {
          let svg = svgs[i];
          (<Element>svgs[i]).setAttribute('class', 'icon');
          (<Element>svgs[i]).setAttribute('title', meta.name);
          let path = svgs[i].firstChild;
          (<Element>path).setAttribute('d', meta.data);
          svgs[i].parentElement.onclick = (e) => {
            this.router.navigateByUrl('/icon/' + icon);
            e.preventDefault();
          };
          //this._popupService = new PopupService<NgbTooltipWindow>(
          //  NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        }
      });
    }
  }];

  async loadContent(data) {
    var self = this;
    let regex = new RegExp('<h1>(.*)</h1>');
    var linkIcon = this.linkIcon;
    this.file = data.file;
    // Render Markdown
    this.viewerService.getMarkdownFileHtml(data.file)
      .subscribe(async markdown => {
        // Import
        let imports: string[] = [];
        markdown.replace(/import:(.*)/g, (m, m1) => {
          imports.push(m1);
          return m;
        });
        let c: string[] = await Promise.all(imports.map(async (url, i) => await this.viewerService.getFile(url)));
        imports.forEach((url, i) => {
          markdown = markdown.replace('import:' + url, c[i]);
        });
        // Tabs
        markdown = markdown.replace(/tabs:(.+)/g, (m, m1) => {
          return `<div class="card mb-3">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item-title">${m1}</li>`;
        });
        markdown = markdown.replace(/tab:[^ ]+ .+(\r?\ntab:[^ ]+ .+)+/g, (m) => {
          return `${m}\n</ul></div><div class="card-body tab-content">`;
        });
        markdown = markdown.replace(/tab:([^ ]+) (.+)/g, (m, m1, m2) => {
          return `<li class="nav-item active">
            <a id="${m1}-tab" class="nav-link" data-toggle="tab" href="#${m1}" role="tab" aria-controls="home"  aria-selected="true">${m2}</a>
          </li>`;
        });
        markdown = markdown.replace(/tabContent:(.+)/g, (m, m1) => {
          return `<div class="tab-pane fade" id="${m1}" role="tabpanel" aria-labelledby="${m1}-tab">`;
        });
        markdown = markdown.replace(/\/tabContent/g, (m) => {
          return `</div>`;
        });
        markdown = markdown.replace(/\/tabs/g, (m) => {
          return `</div></div>`;
        });
        this.markdown = markdown;
      },
      e => this.errorMessage = e);
    // Render Sidebar
    this.viewerService.getSidebar()
      .subscribe(sidebars => {
        this.sidebar = sidebars.find(sidebar => sidebar.url === this.url);
      });
    if (data.stylesheets) {
      data.stylesheets.map(s => this.addCss(s));
    }
  }

  isActive(sidebarItem: SidebarItem) {
    return sidebarItem.url == this.url && sidebarItem.hash == this.route.snapshot.fragment;
  }

  process() {
    let content = this.content.nativeElement;
    let tabGroups = content.querySelectorAll('.nav-tabs') || [];
    tabGroups.forEach(tabGroup => {
      let tabs = tabGroup.querySelectorAll('[data-toggle="tab"]') || [];
      tabs.forEach((tab, i) => {
        if (i == 0) {
          tab.className += ' active';
          document.querySelector(tab.getAttribute('href')).className += ' show active';
        }
        tab.onclick = function (e) {
          tabs.forEach(t => {
            t.className = t.className.replace(/ active/, '');
            let c = document.querySelector(t.getAttribute('href'));
            c.className = c.className.replace(/ show active/, '');
          });
          tab.className += ' active';
          document.querySelector(tab.getAttribute('href')).className += ' show active';
          e.preventDefault();
        };
      });
    });
  }

  addCss(fileName) {
    for(var i = 0; i < document.styleSheets.length; i++){
      if(document.styleSheets[i].href == fileName){
          return;
      }
    }
    var head = document.head,
      link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = fileName;

    head.appendChild(link);
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(x => this.loadContent(x))
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
