import { Directive, Input, HostListener } from '@angular/core';
import { SmoothAnchorService } from './smooth-anchor.service';

@Directive({
  selector: '[appSmoothAnchor]'
})
export class SmoothAnchorDirective {

  @Input('appSmoothAnchor') name!: string;

  constructor(private smoothAnchorService: SmoothAnchorService) {}

  ngOnInit() {
    if (!this.name) throw new Error('No name provided for smooth anchor directive');
  }

  @HostListener('click')
  scroll() {
    const element = this.smoothAnchorService.get(this.name);

    if (!element) return console.warn(`Element '${this.name}' not found`);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });;
  }

}
