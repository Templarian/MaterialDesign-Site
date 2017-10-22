import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from 'app/shared/models/user.model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  async getUser(userId: string): Promise<User> {
    try {
    let res = await this.http.get<User>('/api/user/' + userId)
      .map(u => {
          u.base64 = 'data:image/png;base64,' + u.base64;
          return u;
      })
      .toPromise();
      return res;
    } catch (e) {
      console.dir(e);
    }
    
  }

}