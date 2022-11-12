import { Directive, Input, HostListener } from '@angular/core';
import { SmoothAnchorService } from './smooth-anchor.service';

@Directive({
  selector: '[appSmoothAnchor]'
})
export class SmoothAnchorDirective {

  @Input('appSmoothAnchor') name?: string | null;
  private element?: HTMLElement;

  constructor(private smoothAnchorService: SmoothAnchorService) {}

  ngOnInit() {
    if (!this.name) throw new Error('No name provided for smooth anchor directive');

    this.element = this.smoothAnchorService.get(this.name);
  }

  @HostListener('click')
  scroll() {
    this.element?.scroll();
  }

}
