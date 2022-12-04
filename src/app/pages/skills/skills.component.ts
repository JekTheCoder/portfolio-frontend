import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, filter } from 'rxjs';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
	path$: Observable<string | null>;

	constructor(private route: ActivatedRoute, private router: Router) {
		this.path$ = this.router.events.pipe(
			map(() => this.route.firstChild),
			filter(Boolean),
			map(child => child.snapshot.url[0].path)
		);
	}
}
