import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Icon } from './models/icon.model';
import { Font } from './models/font.model';

interface StringMap { [key: string]: string; }

@Injectable()
export class DatabaseService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get list of hashes for icons in font
   * 
   * @param font Font id to lookup hashes for
   */
  async getHashes(font: Font): Promise<StringMap> {
    const res = await this.http.get<StringMap>(`/api/font/${font.id}/hash`).toPromise();
    return res;
  }

  async getIcons(font: Font, ids: string[]): Promise<Icon[]> {
    if (ids.length === 0) {
      return [];
    }
    const res = await this.http.get<Icon[]>(`/api/font/${font.id}`, {
      params: {
        ids: ids.join(',')
      }
    }).toPromise();
    return res.map(icon => new Icon().from(icon));
  }

  async getIconsByPage(font: Font, page: number, size: number) {
    const res = await this.http.get<Icon[]>(`/api/font/${font.id}`, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    }).toPromise();
    return res.map(icon => new Icon().from(icon));
  }

}