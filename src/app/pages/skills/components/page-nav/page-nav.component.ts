import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NAV_GROUPS } from '../nav-bar/nav-bar.component';
import { NavGroup } from '../accordeon-nav-bar/nav-group';
import { Observable, map, ReplaySubject, shareReplay } from 'rxjs';

@Component({
	selector: 'app-page-nav',
	standalone: true,
	imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink],
	templateUrl: './page-nav.component.html',
	styleUrls: ['./page-nav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNavComponent implements OnInit {
	prevPage$?: Observable<string | null>;
	nextPage$?: Observable<string | null>;

	@Input() set path(v: string | null) {
		if (!v) return;
		this.path$.next(v);
	}

	path$ = new ReplaySubject<string>();

	constructor(@Inject(NAV_GROUPS) private navGroups: NavGroup[]) {}

	ngOnInit(): void {
		const currentI$ = this.path$.pipe(map(path => this.identifyRoute(path)), shareReplay());

		this.prevPage$ = currentI$.pipe(
			map(i => {
				if (--i < 0) return null;

				return this.navGroups[i].src;
			}),
			shareReplay()
		);

		this.nextPage$ = currentI$.pipe(
			map(i => {
				if (++i >= this.navGroups.length) return null;
				return this.navGroups[i].src;
			}),
			shareReplay()
		);
	}

	private identifyRoute(route: string): number {
		const i = this.navGroups.findIndex(nav => nav.src === route);
		if (i === -1) throw new Error('Index not found');

		return i;
	}
}
