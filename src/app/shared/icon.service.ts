import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Icon } from 'app/shared/models/icon.model';

@Injectable()
export class IconService {

  private isMock: boolean;

  constructor(private http: Http) {
    this.isMock = window.location.href.match(/localhost/) !== null;
  }

  async getIcons(packageId: string): Promise<Icon[]> {
    var isMock = window.location.href.match(/localhost/) !== null;
    let res = await this.http.get('/api/package/' + packageId + (isMock ? '/mock.json' : ''))
      .toPromise();
    return res.json().icons.map(icon => new Icon(icon.name, icon.data));
  }

  async getIconsByName(packageId: string, names: string[]): Promise<Icon[]> {
    let res = await this.http.get('/api/package/' + packageId + (this.isMock ? '/mock.json' : ''), {
      params: {
        names: names.join(',')
      }
    }).toPromise();
    return res.json().icons.map(icon => new Icon(icon.name, icon.data));
  }

  async getIconByName(packageId: string, name: string): Promise<Icon> {
    let res = await this.http.get('/api/package/' + packageId + '/name/' + name + (this.isMock ? '/mock.json' : ''))
      .toPromise();
    return res.json().map(icon => new Icon (icon.name, icon.data));
  }

}