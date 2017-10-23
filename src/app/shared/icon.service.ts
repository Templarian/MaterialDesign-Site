import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Icon } from 'app/shared/models/icon.model';
import { Alias } from 'app/shared/models/alias.model';
import { Package } from 'app/shared/models/package.model';
import { PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';
import { PromiseCacheService } from 'app/shared/promiseCache.service';

@Injectable()
export class IconService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  @PromiseCache()
  async getIcons(@CacheParam packageId: string): Promise<Icon[]> {
    let res = await this.http.get<Package>('/api/package/' + packageId)
      .toPromise();
    return res.icons;
  }

  async getIconsByName(packageId: string, names: string[]): Promise<Icon[]> {
    let res = await this.http.get<Package>('/api/package/' + packageId, {
      params: (new HttpParams())
        .set('names', names.join(','))
    }).toPromise();
    return res.icons;
  }

  async getIconByName(packageId: string, name: string): Promise<Icon> {
    let res = await this.http.get<Icon>('/api/package/' + packageId + '/name/' + name)
      .toPromise();
    return res;
  }

  async addAlias(icon: Icon, aliasName: string): Promise<Icon> {
    let res = await this.http.post<Icon>('/api/admin/alias', {
      icon: { id: icon.id },
      alias: { name: aliasName }
    }).toPromise();
    return res;
  }

}