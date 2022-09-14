import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { ProfileIconComponent } from '@common/components/profile-icon/profile-icon.component';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgLetDirective,
    ProfileIconComponent
  ]
})
export class ProfileModule { }
