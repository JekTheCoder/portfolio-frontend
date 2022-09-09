import { animate, state, style, transition, trigger } from "@angular/animations";

const profileMenu = trigger('profileMenu', [
    state('display', style({ display: 'inline-block' })),
    state('hidden', style({ display: 'none' })),
    transition('display => hidden', [
        style({ opacity: 1 }),
        animate('100ms', style({ opacity: 0 }))
    ]),
    transition('hidden => display', [
        style({ display: '*', opacity: 0 }),
        animate('100ms', style({ opacity: 1 }))
    ])
])

export const animations = [profileMenu];