import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ViewerService } from './viewer.service';

@Component({
  selector: 'mdi-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  providers: [
    ViewerService
  ]
})
export class ViewerComponent  {

  errorMessage: string;

  constructor (public route: ActivatedRoute,
               private viewerService: ViewerService) {
    
  }

  pageData: string = 'Loading...';

  loadContent (data) {
    this.viewerService.getMarkdownFileHtml(data.file)
                      .subscribe(v => this.pageData = v,
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