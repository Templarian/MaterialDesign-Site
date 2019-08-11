import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Tag } from 'app/shared/models/tag.model';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';
import { Icon } from './models/icon.model';

@Injectable()
export class TagService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  @PromiseCache()
  async getTag(@CacheParam tagId: string): Promise<Tag> {
    return await this.http.get<Tag>('/api/tag/' + tagId).toPromise();
  }

  async getTags(packageId: string): Promise<Tag[]> {
    return await this.http.get<Tag[]>('/api/tag/' + packageId).toPromise();
  }

  async getAdminTags(packageId: string): Promise<Tag[]> {
    let res = await this.http.get<Tag[]>('/api/admin/tag/' + packageId).toPromise();
    return res.map(t => new Tag().from(t));
  }

  async assignTag(icon: Icon, tag: Tag): Promise<Tag> {
    let res = await this.http.post<Tag>('/api/admin/icon/tag', {
      icon: { id: icon.id },
      tag: { id: tag.id }
    }).toPromise();
    return new Tag().from(res);
  }

  async deleteTag(tag: Tag): Promise<Tag[]> {
    let res = await this.http.delete<Tag[]>('/api/admin/tag/' + tag.id).toPromise();
    return res.map(t => new Tag().from(t));
  }

}