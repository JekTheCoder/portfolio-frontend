import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NAV_GROUPS } from '../nav-bar/nav-bar.component';
import { NavGroup } from '../accordeon-nav-bar/nav-group';
import { Observable, map, shareReplay, ReplaySubject, scan } from 'rxjs';

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

	@Input() initialPath = '';
	indexCounter$ = new ReplaySubject<number>();

	constructor(@Inject(NAV_GROUPS) private navGroups: NavGroup[]) {}

	ngOnInit(): void {
		this.indexCounter$.next(this.identifyRoute(this.initialPath));
		const currentI$ = this.indexCounter$.pipe(
			scan((acc, v) => acc + v, 0),
			shareReplay()
		);

		this.prevPage$ = currentI$.pipe(
			map(i => {
				if (--i < 0) return null;

				return this.navGroups[i].src;
			})
		);

		this.nextPage$ = currentI$.pipe(
			map(i => {
				if (++i >= this.navGroups.length) return null;
				return this.navGroups[i].src;
			})
		);
	}

	private identifyRoute(route: string): number {
		const i = this.navGroups.findIndex(nav => nav.src === route);
		if (i === -1) throw new Error('Index not found');

		return i;
	}
}
