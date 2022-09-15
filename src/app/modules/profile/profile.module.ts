import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { ProfileIconComponent } from '@common/components/profile-icon/profile-icon.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgLetDirective,
    ProfileIconComponent,
    MatButtonModule
  ]
})
export class ProfileModule { }
