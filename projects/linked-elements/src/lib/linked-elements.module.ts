import { NgModule } from '@angular/core';
import { RawScrollStrategy } from '../public-api';
import { LinkedElementDirective } from './linked-element.directive';
import { SmoothScrollStrategy } from './scroll-strategy/smooth-scroll.strategy';
import { PrimaryScrollStrategy, SecondaryScrollStrategy } from './scroll-strategy/tokens';


@NgModule({
  imports: [
    LinkedElementDirective
  ],
  exports: [
    LinkedElementDirective
  ],
  providers: [
    { provide: PrimaryScrollStrategy, useClass: SmoothScrollStrategy },
    { provide: SecondaryScrollStrategy, useClass: RawScrollStrategy }
  ]
})
export class LinkedElementsModule { }
