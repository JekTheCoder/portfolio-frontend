import { animate, state, style, transition, trigger } from '@angular/animations';

const headerToggle = trigger('header', [
	state('open', style({ transform: 'translateY(0%)' })),
	state('closed', style({ transform: 'translateY(-100%)' })),
	transition('open <=> closed', animate(300)),
]);

export const animations = [headerToggle];
