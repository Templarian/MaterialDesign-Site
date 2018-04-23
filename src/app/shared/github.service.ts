import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Issue } from 'app/shared/models/issue.model';
import { PromiseCacheService } from 'app/shared/promiseCache.service';
import { PromiseCache } from 'app/shared/promiseCache.decorator';

@Injectable()
export class GitHubService {

  constructor(
    private http: HttpClient,
    private promiseCacheService: PromiseCacheService
  ) { }

  @PromiseCache()
  async getIssues(): Promise<Issue[]> {
    let res = await this.http.get<Issue[]>('/api/github/issues')
      .toPromise();
    return res.map(i => new Issue().from(i));
  }
}