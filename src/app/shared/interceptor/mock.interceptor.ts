import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let isMock = window.location.href.match(/localhost/) !== null
      && req.url.match(/^\/api/) != null;
    if (isMock) {
      console.info(req.urlWithParams);
      let method = req.method.toLowerCase();
      let mockReq = req.clone({
        url: req.url + `/mock.${method}.json`,
        params: new HttpParams()
      });
      return next.handle(mockReq);
    }
    return next.handle(req);
  }
}