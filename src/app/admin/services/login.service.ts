import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor (
    private http: Http,
    private router: Router
  ) {}

  login (user: string, pass: string): Promise<boolean> {
    let isMock = window.location.href.match(/localhost/) !== null;
    if (isMock) {
        return Promise.resolve(true);
    }
    let body = {
        user: user,
        pass: pass
    };
    return this.http.post('/api/admin', body)
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
  }

  isAuthed (): Promise<boolean> {
    let isMock = window.location.href.match(/localhost/) !== null;
    if (isMock) {
        return Promise.resolve(true);
    }
    return this.http.get('/api/admin')
        .toPromise()
        .then(isAuthed => {
          if (!(isAuthed.json())) {
            this.router.navigateByUrl('/admin');
          }
          return isAuthed.json();
        })
        .catch(this.handleError);
  }

  logout (): Promise<boolean> {
    let isMock = window.location.href.match(/localhost/) !== null;
    if (isMock) {
        return Promise.resolve(true);
    }
    return this.http.delete('/api/admin')
        .toPromise()
        .then(isAuthed => {
          return isAuthed.json();
        })
        .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}