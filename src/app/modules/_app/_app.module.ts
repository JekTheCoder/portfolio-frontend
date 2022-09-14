import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProfileIconComponent as IconComponent } from '@common/components/profile-icon/profile-icon.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { GithubAuthBuilderService } from './services/github-auth-builder.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ProfileIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSlideToggleModule,
    NgLetDirective,
    FontAwesomeModule,
    IconComponent
  ],
  providers: [GithubAuthBuilderService],
  exports: [HeaderComponent, FooterComponent]
})
export class _AppModule { }
