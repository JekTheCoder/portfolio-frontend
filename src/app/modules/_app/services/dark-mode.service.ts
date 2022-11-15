import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BODY } from '../providers/body.provider';
import { LOCAL_STORAGE } from '../../../common/providers/local-storage.provider';

@Injectable({
	providedIn: 'root',
})
export class DarkModeService {
	private renderer = this.rendererFactory.createRenderer(null, null);
	protected darkMode$ = new ReplaySubject<boolean>();

	constructor(
		private rendererFactory: RendererFactory2,
		@Inject(BODY) private body: Body,
		@Inject(LOCAL_STORAGE) private localstorage: Storage
	) {
		const isDark = this.localstorage.getItem('dark') !== 'false';
		this.setDarkMode(isDark);
	}

	setDarkMode(dark: boolean) {
		dark
			? this.renderer.addClass(this.body, 'dark')
			: this.renderer.removeClass(this.body, 'dark');

		this.localstorage.setItem('dark', dark ? 'true' : 'false');
		this.darkMode$.next(dark);
	}

	getDarkMode$() {
		return this.darkMode$.asObservable();
	}
}
