import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, skip } from 'rxjs';
import { LinkedElementsModule } from './linked-elements.module';
import { LinkedElementsService } from './linked-elements.service';
import { BaseRouteMatcherStrategy } from './route-matcher-strategy/base-route-matcher.strategy';

@Injectable({
  providedIn: LinkedElementsModule
})
export class LinkedElementsRouterService implements OnInit, OnDestroy {

  unsuscriber$ = new Subject<void>();

  constructor(
    private routeMatcher: BaseRouteMatcherStrategy,
    private route: ActivatedRoute,
    private linkedElements: LinkedElementsService
  ) {}

  ngOnInit(): void {
    const name = this.routeMatcher.match(this.route.snapshot);
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

}
