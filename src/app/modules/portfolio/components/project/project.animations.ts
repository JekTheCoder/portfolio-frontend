import { animate, query, state, style, transition, trigger, animateChild, group, sequence } from "@angular/animations";

const firstResizingTime = '300ms';
const opacityTime = '200ms';
const secondResizingTime = firstResizingTime;

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

const imageAnimation = trigger('imageTrigger',  [
    state('desktop', style({ width: '100%', height: '220px' })),
    state('mobile', style({ width: '50%', height: '100%' })),
    transition('desktop => mobile', [
        animate(firstResizingTime, style({ width: '50%' })),
        query('@*', animateChild()),
        animate(secondResizingTime, style({ height: '100%' })),
    ]),
    transition('mobile => desktop', [
        animate(firstResizingTime, style({ height: '220px' })),
        query('@*', animateChild()),
        animate(secondResizingTime, style({ width: '100%' })),
    ])
]);

const mobileImage = trigger('mobileImage',  [
    state('mobile', style({ opacity: '0' })),
    state('desktop', style({ opacity: '1' })),
    transition('mobile <=> desktop', [animate(opacityTime)]),
]);

export const animations = [textAnimation, imageAnimation, mobileImage];