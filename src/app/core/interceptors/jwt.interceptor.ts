import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const bearerToken = localStorage.getItem('bearer_token')

    if (bearerToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${bearerToken}` }
      });
    }

    return next.handle(request)
  }

}
