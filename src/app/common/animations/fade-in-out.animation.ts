import { animate, state, style, transition, trigger } from '@angular/animations';
import { cubicBezier } from './cubic-bezier.time';

export function fadeInOut(ms: number) {
	return trigger('fadeInOut', [
		state('in', style({ display: '*' })),
		state('out', style({ display: 'none' })),
		transition('out => in', [
			style({ display: '*', translate: '0 20%', opacity: '0' }),
			animate(cubicBezier(ms), style({ translate: '0', opacity: '1' })),
		]),
		transition('in => out', [
			style({ opacity: '1', translate: '0' }),
			animate(cubicBezier(ms), style({ translate: '0 20%', opacity: '0' })),
		]),
	]);
}

export const fadeInOut200 = fadeInOut(200);
