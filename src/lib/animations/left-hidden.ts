import { animate, state, style, transition, trigger } from "@angular/animations";
import { cubicBezier } from "@common/animations/cubic-bezier.time";

export function leftHidden(ms: number | string) {
	return trigger('leftHidden', [
		state('true', style({ transform: 'translateX(-100%)' })),
		transition('true <=> *', animate(cubicBezier(ms)))
	]);
}

export const leftHidden200 = leftHidden(200);