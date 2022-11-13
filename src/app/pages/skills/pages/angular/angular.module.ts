import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';


@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SvgIconComponent,
  ]
})
export class AngularModule { }
