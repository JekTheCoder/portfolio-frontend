import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SidenavService {
	private sinenavOpen$ = new BehaviorSubject<boolean>(false);

	constructor() {}

	setState(state: boolean) {
		this.sinenavOpen$.next(state);
	}

	openSidenav() {
    this.sinenavOpen$.next(true);
	}

	closeSidenav() {
    this.sinenavOpen$.next(false);
	}

	isOpen(): Observable<boolean> {
		return this.sinenavOpen$;
	}
}
