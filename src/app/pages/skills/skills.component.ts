import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
	path$: Observable<string | null>;

	constructor(private route: ActivatedRoute, private router: Router) {
		const child = this.route.firstChild;
		if (!child) throw new Error('Router outlet firstChild not found');

		this.path$ = child.url.pipe(map(url => url[0].path));
	}
}
