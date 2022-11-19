import { Injectable, Inject, Optional } from '@angular/core';
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
		@Optional() @Inject(HTTP_INTERCEPTORS) httpInterceptors: HttpInterceptor[] | null,
		@Optional() @Inject(AUTH_HTTP_INTERCEPTORS) authHttpInterceptors: HttpInterceptor[] | null
	) {
		if (!httpInterceptors) httpInterceptors = [];
		if (!authHttpInterceptors) authHttpInterceptors = [];

		super(
			new InterceptingHandler(
				backend,
				[httpInterceptors, authHttpInterceptors].flat()
			)
		);
	}
}
