import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { Cacheable, PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  @PromiseCache()
  async getUser( @CacheParam userId: string): Promise<User> {
    let user = await this.http.get<User>('/api/user/' + userId)
      .map(u => {
        u.base64 = 'data:image/png;base64,' + u.base64;
        return u;
      }).toPromise();
    return user;
  }

}