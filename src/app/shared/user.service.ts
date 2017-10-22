import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';
import { Cached, CacheKey } from '@ngx-cache/core';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  @Cached('user-cache')
  async getUser(@CacheKey userId: string): Promise<User> {
    let res = await this.http.get<User>('/api/user/' + userId)
      .map(u => {
          u.base64 = 'data:image/png;base64,' + u.base64;
          return u;
      })
      .toPromise();
    return res;
  }

}