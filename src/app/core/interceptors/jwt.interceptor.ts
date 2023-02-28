import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpStatusCode
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../../modules/authentication/service/auth.service";
import {NotificationService} from "../services/notification.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const bearerToken = localStorage.getItem('bearer_token')

    if (bearerToken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${bearerToken}` }
      });
    }

    return next.handle(request)
      .pipe(catchError(err => {

        if (err instanceof HttpErrorResponse) this.handleError(err, request)

        return throwError(err)
      })
    )

}

  private handleError(err: HttpErrorResponse, request: HttpRequest<unknown>) {

    if (request.url.includes('auth/login')) return

    if (err.status === HttpStatusCode.Unauthorized  && this.authService.isSessionExpired()) {
      this.authService.logout()
      this.router.navigate(['/login'])
      this.notificationService.showInfo("Your session has expired")
    }
  }

}
