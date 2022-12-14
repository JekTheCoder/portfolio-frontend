import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Subject, distinctUntilChanged } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { fadeIn200 } from '@lib/animations/fade-in';
import { fadeOut200 } from '@lib/animations/fade-out';

@Component({
	selector: 'app-reactive-section',
	standalone: true,
	imports: [
		CommonModule,
		MatSlideToggleModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule
	],
	templateUrl: './reactive-section.component.html',
	styleUrls: ['./reactive-section.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [fadeIn200, fadeOut200]
})
export class ReactiveSectionComponent {
	private _checked$ = new Subject<boolean>();
	checked$ = this._checked$.pipe(distinctUntilChanged());

	setChecked(checked: boolean) {
		this._checked$.next(checked);
	}
}
