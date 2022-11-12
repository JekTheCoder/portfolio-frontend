import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { rightTilt100 } from '@lib/animations/right-tilt';
import { Observable, fromEvent, merge, map } from 'rxjs';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [rightTilt100]
})
export class TechCardComponent implements OnInit {

  @ViewChild('hover', { static: true }) hover!: ElementRef<HTMLElement>;

  hover$!: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
    const mouseenter = fromEvent(this.hover.nativeElement, 'mouseenter');
    const mouseleave = fromEvent(this.hover.nativeElement, 'mouseleave');

    this.hover$ = merge(
      mouseenter.pipe(map(() => true)),
      mouseleave.pipe(map(() => false))
    );
  }

}
