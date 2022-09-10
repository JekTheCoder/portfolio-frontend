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
import { AuthHeader } from '../providers/auth-header';
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
    const requireAuth = request.headers.has(AuthHeader);
    if (requireAuth) request = this.injectAuthorization(request);

    return next.handle(request);
  }

  injectAuthorization(request: HttpRequest<unknown>): HttpRequest<unknown> {
    request = request.clone();
    request.headers.delete(AuthHeader);

    if (!this.authTokens.accessToken) {
      this.router.navigate(['/']);
      throw new Error();
    }

    request.headers.set('Authorization', `Bearer ${this.authTokens.accessToken}`);

    return request;
  }
}

export const AuthRequestInterceptorProvider: Provider = {
  provide: AUTH_HTTP_INTERCEPTORS,
  useClass: AuthRequestInterceptor,
  multi: true
}
