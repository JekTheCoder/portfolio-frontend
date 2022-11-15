import { Injectable, Inject } from '@angular/core';
import {
	HttpBackend,
	HttpClient,
	HttpInterceptor,
	HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { InterceptingHandler } from './intercepting-handler';
import { AUTH_HTTP_INTERCEPTORS } from './auth-http-interceptors';

@Injectable()
export class AuthHttpClient extends HttpClient {
	constructor(
		backend: HttpBackend,
		@Inject(HTTP_INTERCEPTORS) httpInterceptors: HttpInterceptor[],
		@Inject(AUTH_HTTP_INTERCEPTORS) authHttpInterceptors: HttpInterceptor[]
	) {
		super(
			new InterceptingHandler(
				backend,
				[httpInterceptors, authHttpInterceptors].flat()
			)
		);
	}
}
