import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { _AppModule } from './modules/_app/_app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    _AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
