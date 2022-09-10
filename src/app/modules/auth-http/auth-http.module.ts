import { NgModule } from '@angular/core';
import { AuthHttpClient } from './providers/auth-http-client';


@NgModule({
  providers: [AuthHttpClient]
})
export class AuthHttpModule { }
