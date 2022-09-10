import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpModule } from './modules/auth-http/auth-http.module';
import { _AppModule } from './modules/_app/_app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    _AppModule,
    HttpClientModule,
    AuthHttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
