import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Sidebar } from './sidebar/sidebar.model';
import { SidebarItem } from './sidebar/sidebarItem.model';

@Injectable()
export class ViewerService {

  constructor (private http: Http) {}

  getMarkdownFileHtml (markdownFile: string): Observable<string> {
    return this.http.get(markdownFile)
                    .map(res => this.extractData(res))
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.text().replace('{{version}}', '2.0.46');
  }

  getSidebar () {
    return this.http.get('content/sidebar.md')
                    .map(res => this.processSidebar(res))
                    .catch(this.handleError);
  }

  private sidebars: Sidebar[] = [];

  private getSidebarByUrl (baseUrl): Sidebar {
    let sidebar = this.sidebars.find(sidebar => {
      return sidebar.url == baseUrl;
    });
    if (sidebar) {
      return sidebar;
    } else {
      sidebar = new Sidebar(baseUrl, []);
      this.sidebars.push(sidebar);
      return sidebar;
    }
  };

  private processSidebar (res: Response): Sidebar[] {
    var lines = res.text().split(/\r?\n/);
    var baseUrls: string[] = [];
    var self = this;
    var clearNext = true;

    lines.forEach(function (line) {
      let m = null;
      if (m = line.match(/^- \/(.*)$/)) {
        if (clearNext) {
          baseUrls = [];
          clearNext = false;
        }
        baseUrls.push(m[1]);
      } else if (m = line.match(/^  - ([^ ]+) (.+?)( _([^_]+)_)? \/([a-z-\/]+)$/)) {
        baseUrls.forEach(function (baseUrl) {
          self.getSidebarByUrl(baseUrl).items.push(new SidebarItem(
            m[1],
            m[2],
            m[4],
            m[5],
            []
          ));
        });
        clearNext = true;
      } else if (m = line.match(/^    -/)) {

      } else {
        throw 'Invalid line item.';
      }
    });
    return this.sidebars;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}