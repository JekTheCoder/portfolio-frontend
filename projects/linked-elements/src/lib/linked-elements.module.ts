import { NgModule } from '@angular/core';
import { LinkedElementDirective } from './linked-element.directive';
import { BaseScrollStrategy } from './scroll-strategy/base-scroll-strategy';
import { SmoothScrollStrategy } from './scroll-strategy/smooth-scroll-strategy';


@NgModule({
  imports: [
    LinkedElementDirective
  ],
  exports: [
    LinkedElementDirective
  ],
  providers: [
    { provide: BaseScrollStrategy, useClass: SmoothScrollStrategy }
  ]
})
export class LinkedElementsModule { }
