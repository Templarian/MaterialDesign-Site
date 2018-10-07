import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Icon } from 'app/shared/models/icon.model';
import { Alias } from 'app/shared/models/alias.model';
import { Package } from 'app/shared/models/package.model';
import { PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { Tag } from 'app/shared/models/tag.model';

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
    return res.icons.map(i => new Icon().from(i));
  }

  async getIconsByName(packageId: string, names: string[]): Promise<Icon[]> {
    let res = await this.http.get<Package>('/api/package/' + packageId, {
      params: (new HttpParams())
        .set('names', names.join(','))
    }).toPromise();
    return res.icons.map(i => new Icon().from(i));
  }

  async getIconByName(packageId: string, name: string): Promise<Icon> {
    let res = await this.http.get<Icon>('/api/package/' + packageId + '/name/' + name)
      .toPromise();
    return new Icon().from(res);
  }

  async getAdminIcons(packageId: string): Promise<Icon[]> {
    let res = await this.http.get<Package>('/api/admin/package/' + packageId)
      .toPromise();
    return res.icons.map(i => new Icon().from(i));
  }

  async getAdminIconsByTag(pack: Package, tag: Tag): Promise<Icon[]> {
    let res = await this.http.get<Icon[]>('/api/admin/icon/' + pack.id + '/tag/' + tag.id)
      .toPromise();
    return res.map(i => new Icon().from(i));
  }

  async addAlias(icon: Icon, aliasName: string): Promise<Alias> {
    let res = await this.http.post<Alias>('/api/admin/icon/alias', {
      icon: { id: icon.id },
      alias: { name: aliasName }
    }).toPromise();
    return new Alias().from(res);
  }

  async addTag(icon: Icon, tag: Tag): Promise<Tag> {
    let res = await this.http.post<Tag>('/api/admin/icon/tag', {
      icon: { id: icon.id },
      tag: { id: tag.id }
    }).toPromise();
    return new Tag().from(res);
  }

  async rename(icon: Icon, name: string): Promise<Icon> {
    let res = await this.http.post<Icon>('/api/admin/icon/rename', {
      icon: { id: icon.id },
      name: name
    }).toPromise();
    return new Icon().from(res);
  }

  async updateDescription(icon: Icon): Promise<Icon> {
    let res = await this.http.post<Icon>('/api/admin/icon/description', {
      icon: {
        id: icon.id,
        description: icon.description
      }
    }).toPromise();
    return new Icon().from(res);
  }

}