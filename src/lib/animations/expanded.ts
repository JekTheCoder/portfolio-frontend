import { animate, state, style, transition, trigger } from "@angular/animations";

export function expanded(ms: number | string) {
    return trigger('expanded', [
        state('true', style({ height: '*' })),
        state('false', style({ height: 0, overflow: 'hidden' })),
        transition('true <=> false', animate(`${ms}ms ease-in-out`))
    ]);
}

export const expanded300 = expanded(300);