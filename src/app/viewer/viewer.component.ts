import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ViewerService } from './viewer.service';

declare var Remarkable: any;
declare var hljs: any;

@Component({
  selector: 'mdi-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  providers: [
    ViewerService
  ]
})
export class ViewerComponent  {

  remarkable = new Remarkable();
  errorMessage: string;
  title: string = 'Loading...';
  pageData: string = 'Loading...';

  constructor (public route: ActivatedRoute,
               private viewerService: ViewerService) {
    
  }

  loadContent (data) {
    let regex = new RegExp('<h1>(.*)</h1>');
    let title = 'Loading...';
    this.viewerService.getMarkdownFileHtml(data.file)
                      .subscribe(markdown => {
                        markdown = this.remarkable.render(markdown);
                        markdown = markdown.replace(regex, (sub, h1) => {
                          title = h1;
                          return '';
                        });
                        this.title = title;
                        this.pageData = markdown;
                        setTimeout(function () {
                          let items = document.querySelectorAll('pre code');
                          for(var i = 0; i < items.length; i++) {
                            hljs.highlightBlock(items[i]);
                          }
                        }, 500);
                      },
                      e => this.errorMessage = e);
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