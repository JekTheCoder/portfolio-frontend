import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthTokensService } from '../../auth/services/auth-tokens.service';
import { AUTH_HTTP_INTERCEPTORS } from '../providers/auth-http-interceptors';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {
  constructor(
    private authTokens: AuthTokensService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.injectAuthorization(request));
  }

  injectAuthorization(request: HttpRequest<unknown>): HttpRequest<unknown> {
    if (!this.authTokens.accessToken) {
      this.router.navigate(['/']);
      throw new Error();
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authTokens.accessToken}`
      }
    });
  }
}

export const AuthRequestInterceptorProvider: Provider = {
  provide: AUTH_HTTP_INTERCEPTORS,
  useClass: AuthRequestInterceptor,
  multi: true
}
