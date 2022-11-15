import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { OpenSidenavDirective } from './open-sidenav.directive';
import { CloseSidenavDirective } from './close-sidenav.directive';



@NgModule({
  declarations: [
    SidenavComponent,
    OpenSidenavDirective,
    CloseSidenavDirective
  ],
  imports: [
    CommonModule
  ],
	exports: [SidenavComponent, OpenSidenavDirective, CloseSidenavDirective]
})
export class SidenavModule { }
