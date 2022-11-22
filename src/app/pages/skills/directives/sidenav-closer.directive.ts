import { Directive } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavService } from '@lib/components/sidenav/sidenav.service';
import { HostObservable } from 'ngx-host-observable';
import { filter, map, Observable } from 'rxjs';

@Directive({
	selector: '[appSidenavCloser]',
})
export class SidenavCloserDirective {
	@HostObservable()
	closer$?: Observable<void>;

	constructor(private router: Router, private sidenav: SidenavService) {
		this.closer$ = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			map(() => this.sidenav.closeSidenav())
		);
	}
}
