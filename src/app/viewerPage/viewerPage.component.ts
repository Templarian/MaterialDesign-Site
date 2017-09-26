import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ViewerService } from './viewerPage.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Sidebar } from './sidebar/sidebar.model';
import { SidebarItem } from './sidebar/sidebarItem.model';

declare var Remarkable: any;
declare var hljs: any;

@Component({
  selector: 'mdi-viewer',
  templateUrl: './viewerPage.component.html',
  styleUrls: ['./viewerPage.component.scss'],
  providers: [
    ViewerService
  ]
})
export class ViewerPageComponent  {

  remarkable = new Remarkable({
    html: true
  });
  errorMessage: string;
  title: string = 'Loading...';
  pageData: SafeHtml = 'Loading...';
  file: string = 'error';
  url: string = '';
  sidebar: Sidebar;

  constructor (public route: ActivatedRoute,
               private viewerService: ViewerService,
               private sanitizer: DomSanitizer) {
      this.url = route.snapshot.url.join('/');
      this.sidebar = new Sidebar(this.url, [
        new SidebarItem("home", "Loading...", "", "", [])
      ]);
  }

  loadContent (data) {
    let regex = new RegExp('<h1>(.*)</h1>');
    let title = 'Loading...';
    this.file = data.file;
    this.viewerService.getMarkdownFileHtml(data.file)
                      .subscribe(markdown => {
                        markdown = this.remarkable.render(markdown);
                        markdown = markdown.replace(regex, (sub, h1) => {
                          title = h1;
                          return '';
                        });
                        this.title = title;
                        this.pageData = this.sanitizer.bypassSecurityTrustHtml(markdown);
                        setTimeout(function () {
                          let items = document.querySelectorAll('pre code');
                          for(var i = 0; i < items.length; i++) {
                            hljs.highlightBlock(items[i]);
                          }
                        }, 500);
                      },
                      e => this.errorMessage = e);
    this.viewerService.getSidebar()
                      .subscribe(sidebars => {
                        this.sidebar = sidebars.find(sidebar => sidebar.url === this.url);
                      });
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