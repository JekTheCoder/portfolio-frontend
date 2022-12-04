import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
	path$: Observable<string | null>;

	constructor(private route: ActivatedRoute) {
		const child = this.route.firstChild;
		if (!child) throw new Error();

		this.path$ = child.url.pipe(map(url => url[0].path));
	}
}
