import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent {}
