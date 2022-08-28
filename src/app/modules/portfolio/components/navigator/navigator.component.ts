import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, map, Observable, Subject, takeUntil } from 'rxjs';
import { ResizeObservableFactoryService } from '../../services/resize-observable-factory.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit, OnDestroy {

  @Input() points: string[] = []
  private nativeElement: HTMLElement | null;

  protected showPointName$ = new BehaviorSubject<boolean>(false);
  protected unsuscriber$ = new Subject<void>();

  constructor(
    { nativeElement }: ElementRef,
    private resizeFactory: ResizeObservableFactoryService
    ) { this.nativeElement = nativeElement; }

  ngOnInit(): void {
    if (!this.nativeElement) return;
    const obs$ = this.resizeFactory.createReizeObservable(this.nativeElement)
      .pipe(
        map(e => e[0].target as HTMLElement),
        map(el => el.clientWidth),
        map(width => width > 80),
        takeUntil(this.unsuscriber$)
    );
    obs$.subscribe(this.showPointName$);
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

}
