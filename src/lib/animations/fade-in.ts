import { animate, style, transition, trigger } from '@angular/animations';
import { cubicBezier } from '@common/animations/cubic-bezier.time';

export function fadeIn(ms: string | number) {
	return trigger('fadeIn', [
		transition(':enter', [
			style({ opacity: 0 }),
			animate(cubicBezier(ms), style({ opacity: '*' }))
		]),
	]);
}

export const fadeIn200 = fadeIn(200);