import { animate, state, style, transition, trigger } from '@angular/animations';
import { cubicBezier } from '@common/animations/cubic-bezier.time';

export function rightTitlt(ms: string | number) {
	return trigger('rightTilt', [
		state(
			'true',
			style({
				'transform-origin': '50% 80%',
				transform: 'rotate(5deg)',
			})
		),
		transition('true <=> *', animate(cubicBezier(ms))),
	]);
}

export const rightTilt100 = rightTitlt(100);
