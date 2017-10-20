import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Rx';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  private url: string;

  constructor (
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = route.snapshot.url.map(m => m.path).join('/');
  }

  login (user: string, pass: string): Promise<boolean> {
    let body = {
        user: user,
        pass: pass
    };
    return this.http.post<boolean>('/api/admin', body).toPromise();
  }

  isAuthed (): Promise<boolean> {
    return this.http.get<boolean>('/api/admin')
        .toPromise()
        .then(isAuthed => {
          if (this.url != 'admin'
            && !(isAuthed)) {
            this.router.navigateByUrl('/admin');
          }
          return isAuthed;
        });
  }

  logout (): Promise<boolean> {
    return this.http.delete('/api/admin')
        .toPromise()
        .then(res => {
          this.router.navigateByUrl('/admin');
          return null;
        });
  }

}