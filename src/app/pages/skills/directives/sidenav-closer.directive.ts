import { Directive, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavService } from '@lib/components/sidenav/sidenav.service';
import { Subject, filter, tap, takeUntil } from 'rxjs';

@Directive({
	selector: '[appSidenavCloser]',
})
export class SidenavCloserDirective implements OnDestroy {
	private unsuscriber$ = new Subject<void>();

	constructor(private router: Router, private sidenav: SidenavService) {
		this.router.events.pipe(
			takeUntil(this.unsuscriber$),
			filter(event => event instanceof NavigationEnd),
			tap(() => this.sidenav.closeSidenav())
		)
		.subscribe();
	}

	ngOnDestroy(): void {
		this.unsuscriber$.next();
	}
}
