import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Tag } from 'app/shared/models/tag.model';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { Cacheable, PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';

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

  async getTags(): Promise<Tag[]> {
    return await this.http.get<Tag[]>('/api/tag').toPromise();
  }

  async getAdminTags(): Promise<Tag[]> {
    return await this.http.get<Tag[]>('/api/admin/tag').toPromise();
  }

}