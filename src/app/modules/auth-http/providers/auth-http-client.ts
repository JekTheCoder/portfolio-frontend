import { Injectable, Inject } from '@angular/core';
import {
  HttpBackend,
  HttpClient,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { InterceptingHandler } from './intercepting-handler';

@Injectable()
export class AuthHttpClient extends HttpClient {
  constructor(
    backend: HttpBackend,
    @Inject(HTTP_INTERCEPTORS) httpInterceptors: HttpInterceptor[]
  ) {
    super(new InterceptingHandler(backend, httpInterceptors));
  }
}
