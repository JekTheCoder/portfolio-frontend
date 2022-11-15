import { state, trigger, style, transition, animate } from '@angular/animations';
import { cubicBezier } from './cubic-bezier.time';

function UpDown(ms: number | string) {
	return trigger('upDown', [
		state('true', style({})),
		state('false', style({ opacity: 0 })),
		transition('true => false', [
			animate(cubicBezier(ms), style({ transform: 'translateY(-100%)' })),
		]),
		transition('false => true', [
			style({ transform: 'translateY(-100%)', display: '*', opacity: 1 }),
			animate(cubicBezier(ms), style({ transform: 'translateY(0)' })),
		]),
	]);
}

export const UpDown400 = UpDown(400);
