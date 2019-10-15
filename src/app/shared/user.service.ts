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
      .toPromise();
    return user;
  }

  @PromiseCache()
  async getUsers(): Promise<User[]> {
    let res = await this.http.get<User[]>('/api/user')
      .toPromise();
    return res.map(i => new User().from(i));
  }

  async getAdminProfile(): Promise<User> {
    return await this.http.get<User>('/api/admin/profile')
      .map(i => new User().from(i))
      .toPromise();
  }

  async updateAdminProfile(user: User): Promise<User> {
    return await this.http.post<User>('/api/admin/profile', user)
      .map(i => new User().from(i))
      .toPromise();
  }

  async updateAdminProfileAvatar(data: string): Promise<User> {
    return await this.http.post<User>('/api/admin/profile/avatar', {
        base64: data.replace('data:image/png;base64,', '')
      })
      .map(i => new User().from(i))
      .toPromise();
  }

  async getAdminUsers(packageId: string): Promise<User[]> {
    return await this.http.get<User[]>('/api/admin/user', {
        params: {
          'packageId': packageId
        }
      })
      .map(users => users.map(i => new User().from(i)))
      .toPromise();
  }

}