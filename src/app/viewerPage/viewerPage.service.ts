import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ViewerService {

  constructor (private http: Http) {}

  getMarkdownFileHtml (markdownFile: string): Observable<string> {
    return this.http.get(markdownFile)
                    .map(res => this.extractData(res))
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.text().replace('{{version}}', '2.0.46');
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