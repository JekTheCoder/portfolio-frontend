import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgLetDirective } from 'src/app/common/directives/ng-let.directive';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';



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
    FontAwesomeModule,
    NgLetDirective
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class _AppModule { }
