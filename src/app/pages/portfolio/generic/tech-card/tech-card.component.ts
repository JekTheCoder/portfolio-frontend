import { BooleanInput } from '@angular/cdk/coercion';
import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	Input,
} from '@angular/core';
import { rightTilt100 } from '@lib/animations/right-tilt';
import { HoverDirective } from '@lib/directives/hover/hover.directive';
import { parseBooleanInput } from '@lib/utils/parse-boolean-input';
import { Observable, BehaviorSubject, switchMap, of } from 'rxjs';

@Component({
	selector: 'app-tech-card',
	templateUrl: './tech-card.component.html',
	styleUrls: ['./tech-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [rightTilt100],
})
export class TechCardComponent implements OnInit {
	@ViewChild(HoverDirective, { static: true }) hoverDirective!: HoverDirective;
	@Input() set disabled(val: BooleanInput) {
		this.disabled$.next(parseBooleanInput(val));
	}

	hover$!: Observable<boolean>;
	protected disabled$ = new BehaviorSubject<boolean>(false);

	constructor() {}

	ngOnInit(): void {
		this.hover$ = this.disabled$.pipe(
			switchMap(disabled => (disabled ? of(false) : this.hoverDirective.hover))
		);
	}
}
