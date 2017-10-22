import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';
import { Cached, CacheKey } from '@ngx-cache/core';
import { PromiseCacheService } from 'app/shared/promiseCache.service';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  getUserPromise(userId: string): Promise<User> {
    console.log(userId in this.promiseCacheService.foo);
    if (userId in this.promiseCacheService.foo) {
      return this.promiseCacheService.foo[userId];
    }
    return this.promiseCacheService.foo[userId] = new Promise<User>(async resolve => {
      let foo = await this.http.get<User>('/api/user/' + userId)
      .map(u => {
          u.base64 = 'data:image/png;base64,' + u.base64;
          return u;
      }).toPromise();
      resolve(foo);
    })
  }

  @Cached('user-cache')
  async getUser(@CacheKey userId: string): Promise<User> {
    return await this.getUserPromise(userId);
    // let res = await this.http.get<User>('/api/user/' + userId)
    //   .map(u => {
    //       u.base64 = 'data:image/png;base64,' + u.base64;
    //       return u;
    //   })
    //   .toPromise();
    // return res;
  }

}