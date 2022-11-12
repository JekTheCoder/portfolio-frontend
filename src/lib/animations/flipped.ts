import { animate, state, style, transition, trigger } from "@angular/animations";

export function flipped(ms: number | string) {
    return trigger('flipped', [
        state('true', style({ transform: 'rotate(180deg)' })),
        state('false', style({ transform: 'rotate(0deg)' })),
        transition('true <=> false', animate(`${ms}ms ease-in-out`))
      ]);
}

export const flipped300 = flipped(300);