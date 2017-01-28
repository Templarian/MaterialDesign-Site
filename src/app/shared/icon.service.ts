import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class IconService {

  constructor (private http: Http) {}

  getIcons (packageId: string): Observable<any[]> {
    var isMock = window.location.href.match(/localhost/) !== null;
    return this.http.get('/api/package/' + packageId + (isMock ? '/mock.json' : ''))
                    .map(res => res.json().icons)
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