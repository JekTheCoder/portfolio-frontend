import { NgOptimizedImage } from '@angular/common';
import {
	Component,
	OnInit,
	InjectionToken,
	Input,
	Inject,
	ChangeDetectionStrategy,
} from '@angular/core';

export const ICONS_PATH = new InjectionToken<string>('ICONS_PATH');

@Component({
	selector: 'app-svg-icon',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'inline-block'
	}
})
export class SvgIconComponent implements OnInit {
	@Input() icon!: string;

	constructor(@Inject(ICONS_PATH) protected iconsPath: string) {}

	ngOnInit(): void {
		if (!this.icon) throw new Error('Name must be provided');
	}
}
