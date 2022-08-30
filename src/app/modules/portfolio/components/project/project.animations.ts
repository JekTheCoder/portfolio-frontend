import { animate, state, style, transition, trigger } from "@angular/animations";

const textAnimation = trigger('textTrigger',  [
    state('mobile', style({ width: '100%' })),
    state('desktop', style({ width: '50%' })),
    transition('mobile => desktop', [
        animate('200ms', style({ color: 'transparent' })),
        style({ color: 'transparent' }),
        animate('800ms', style({ width: '50%' })),
        animate('200ms', style({ color: 'unset' }))
    ]),
    transition('desktop => mobile', [
        animate('200ms', style({ color: 'transparent' })),
        style({ color: 'transparent' }),
        animate('800ms', style({ width: '100%' })),
        animate('200ms', style({ color: 'unset' }))
    ])
]);

export const animations = [textAnimation];