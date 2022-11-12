import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GithubAuthBuilderService } from './services/github-auth-builder.service';
import { AuthModule } from '@core/auth/auth.module';
import { HeaderModule } from './components/header/header.module';


@NgModule({
  declarations: [
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    HeaderModule
  ],
  providers: [GithubAuthBuilderService],
  exports: [HeaderModule, FooterComponent]
})
export class _AppModule { }
