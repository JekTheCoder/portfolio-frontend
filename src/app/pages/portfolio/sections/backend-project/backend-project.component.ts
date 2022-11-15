import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faArrowDown, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { expanded300 } from '@lib/animations/expanded';
import { flipped300 } from '@lib/animations/flipped';

@Component({
	selector: 'app-backend-project',
	templateUrl: './backend-project.component.html',
	styleUrls: ['./backend-project.component.scss'],
	animations: [flipped300, expanded300],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendProjectComponent {
	arrowIcon = faArrowDown;
	globeIcon = faGlobeAmericas;

	expanded = false;
}
