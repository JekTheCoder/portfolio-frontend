import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ResizeObservableFactoryService {
	constructor() {}

	createReizeObservable(element: Element): Observable<ResizeObserverEntry[]> {
		return new Observable(subscriber => {
			var ro = new ResizeObserver(entries => subscriber.next(entries));
			ro.observe(element);
			return () => ro.disconnect();
		});
	}
}
