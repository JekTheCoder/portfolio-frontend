import { NgModule } from '@angular/core';
import { SmoothAnchorDirective } from './smooth-anchor.directive';
import { SmoothAnchorService } from './smooth-anchor.service';
import { TargetFragmentDirective } from './target-fragment.directive';



@NgModule({
  declarations: [
    SmoothAnchorDirective,
    TargetFragmentDirective
  ],
  imports: [],
  providers: [SmoothAnchorService],
  exports: [SmoothAnchorDirective, TargetFragmentDirective]
})
export class SmoothAnchorModule { }
