import { animate, query, state, style, transition, trigger, animateChild, group, sequence } from "@angular/animations";

const textAnimation = trigger('textTrigger',  [
    state('mobile', style({ width: '40%' })),
    state('desktop', style({ width: '100%' })),
    transition('mobile => desktop', [
        animate('200ms', style({ color: 'transparent' })),
        style({ color: 'transparent' }),
        animate('400ms', style({ width: '100%' })),
        animate('200ms', style({ color: 'unset' }))
    ]),
    transition('desktop => mobile', [
        animate('200ms', style({ color: 'transparent' })),
        style({ color: 'transparent' }),
        animate('800ms', style({ width: '40%' })),
        animate('200ms', style({ color: 'unset' }))
    ])
]);

const desktopToMobile = [
    animate('400ms', style({ width: '50%' })),
    animate('400ms', style({ height: '100%' }))
];

const mobileToDesktop = [
    animate('400ms', style({ height: '220px' })),
    animate('400ms', style({ width: '100%' })),
];

const imageAnimation = trigger('imageTrigger',  [
    state('desktop', style({ width: '100%', height: '220px' })),
    state('mobile', style({ width: '50%', height: '100%' })),
    transition('desktop => mobile', 
        group([
            sequence(desktopToMobile),
            query('@*', animateChild())
        ]
    )),
    transition('mobile => desktop', group([
        sequence(mobileToDesktop),
        query('@*', animateChild())
    ]))
]);

const mobileImage = trigger('mobileImage',  [
    state('mobile', style({ opacity: '0' })),
    state('desktop', style({ opacity: '1' })),
    transition('mobile <=> desktop', [animate('400ms')]),
]);

export const animations = [textAnimation, imageAnimation, mobileImage];