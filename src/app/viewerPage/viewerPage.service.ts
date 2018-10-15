import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Sidebar } from './sidebar/sidebar.model';
import { SidebarItem } from './sidebar/sidebarItem.model';

@Injectable()
export class ViewerService {

  constructor(private http: HttpClient) { }

  async getFile(url: string): Promise<string> {
    return this.http.get(url, {
      responseType: 'text'
    }).toPromise().then(
      (res) => this.extractData(res),
      () => `<p class="alert alert-danger">Import of "${url}" failed.</p>`
    );
  }

  getMarkdownFileHtml(markdownFile: string): Observable<string> {
    return this.http.get(markdownFile, {
      responseType: 'text'
    }).map(res => this.extractData(res));
  }

  private extractData(text: string) {
    // TODO: Replace with config
    text = text.replace('{{version}}', '2.8.94');
    return text;
  }

  getSidebar() {
    return this.http.get('content/sidebar.md', {
      responseType: 'text'
    }).map(res => this.processSidebar(res));
  }

  private sidebars: Sidebar[] = [];

  private getSidebarByUrl(baseUrl): Sidebar {
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

  private processSidebar(text: string): Sidebar[] {
    var lines = text.replace(/\s+$/g, '').split(/\r?\n/);
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
      } else if (m = line.match(/^  - ([^ ]+) (.+?)( _([^_]+)_)? \/([\w-\/]+)#?([\w-]+)?$/)) {
        baseUrls.forEach(function (baseUrl) {
          self.getSidebarByUrl(baseUrl).items.push(new SidebarItem(
            m[1],
            m[2],
            m[4],
            m[5],
            m[6] || null,
            []
          ));
        });
        clearNext = true;
      } else if (m = line.match(/^    - ([^ ]+) (.+?)( _([^_]+)_)? \/([\w-\/]+)#?([\w-]+)?$/)) {
        baseUrls.forEach(function (baseUrl) {
          let items = self.getSidebarByUrl(baseUrl).items;
          items[items.length - 1].subItems.push(new SidebarItem(
            m[1],
            m[2],
            m[4],
            m[5],
            m[6] || null,
            []
          ));
        });
      } else {
        throw 'Invalid line item in sidebar.md... "' + line + '"';
      }
    });
    return this.sidebars;
  }

}
