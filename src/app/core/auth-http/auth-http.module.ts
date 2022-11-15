import { NgModule } from '@angular/core';
import { AuthRequestInterceptorProvider } from './interceptors/auth-request.interceptor';
import { AuthHttpClient } from './providers/auth-http-client';

@NgModule({
	providers: [AuthHttpClient, AuthRequestInterceptorProvider],
})
export class AuthHttpModule {}
