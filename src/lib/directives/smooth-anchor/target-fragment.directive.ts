import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { SmoothAnchorService } from './smooth-anchor.service';

@Directive({
  selector: '[appTargetFragment]'
})
export class TargetFragmentDirective implements OnInit {

  @Input('appTargetFragment') name?: string | null;

  constructor(
    private smoothAnchorService: SmoothAnchorService,
    private host: ElementRef<HTMLElement>
  ) {}

  ngOnInit(): void {
    if (!this.name) throw new Error('Provide a name for target element');

    this.smoothAnchorService.set(this.name, this.host.nativeElement);
  }

}
