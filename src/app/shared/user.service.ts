import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private cache: User[] = [];

  async getUser(userId: string): Promise<User> {
    //if (this.cache.filter(x => x.id == userId).length > 0) {
    //  return this.cache.filter(x => x.id == userId)[0];
    //}
    let res = await this.http.get<User>('/api/user/' + userId)
      .map(user => {
          user.base64 = 'data:image/png;base64,' + user.base64;
          return user;
      })
      .toPromise();
    //this.cache.push(res);
    return res;
  }

}