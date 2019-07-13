import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { PromiseCache, CacheParam } from 'app/shared/promiseCache.decorator';

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

  @PromiseCache()
  async getUsers(): Promise<User[]> {
    let res = await this.http.get<User[]>('/api/user')
      .toPromise();
    return res.map(i => new User().from(i)).map(u => {
      u.base64 = 'data:image/png;base64,' + u.base64;
      return u;
    });
  }

  async getAdminUsers(packageId: string): Promise<User[]> {
    let res = await this.http.get<User[]>('/api/admin/user', {
      params: {
        'packageId': packageId
      }
    })
      .toPromise();
    return res.map(i => new User().from(i)).map(u => {
      u.base64 = 'data:image/png;base64,' + u.base64;
      return u;
    });
  }

}