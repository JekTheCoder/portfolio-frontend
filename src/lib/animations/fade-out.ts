import { animate, style, transition, trigger } from '@angular/animations';
import { cubicBezier } from '@common/animations/cubic-bezier.time';

export function fadeOut(ms: string | number) {
	return trigger('fadeOut', [
		transition(':leave', animate(cubicBezier(ms), style({ opacity: '0' }))),
	]);
}

export const fadeOut200 = fadeOut(200);