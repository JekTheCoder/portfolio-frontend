import { animate, state, style, transition, trigger } from "@angular/animations";

const fadeInOut = trigger('fadeInOut', [
    state('in', style({ display: '*' })),
    state('out', style({ display: 'none' })),
    transition('out => in', [
        style({ display: '*', translate: '0 20%', opacity: '0' }),
        animate('200ms', style({ translate: '0', opacity: '1' }))
    ]),
    transition('in => out', [
        style({ opacity: '1', translate: '0' }),
        animate('200ms', style({ translate: '0 20%', opacity: '0' }))
    ])
])

export const animations = [fadeInOut];