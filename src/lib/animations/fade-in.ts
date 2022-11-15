import { animate, style, transition, trigger } from '@angular/animations';
import { cubicBezier } from '@common/animations/cubic-bezier.time';

export function fadeIn(ms: string | number) {
	return trigger('fadeIn', [
		transition(':leave', animate(cubicBezier(ms), style({ opacity: '0' }))),
	]);
}

export const fadeIn200 = fadeIn(200);