import { animate, query, state, style, transition, trigger, animateChild, group, sequence } from "@angular/animations";

const firstResizingTime = '300ms';
const opacityTime = '200ms';
const secondResizingTime = firstResizingTime;

const textAnimation = trigger('textTrigger',  [
    state('mobile', style({ width: '40%' })),
    state('desktop', style({ width: '100%' })),
    transition('mobile => desktop', [
        animate('400ms', style({ opacity: 0 })),
        animate('400ms', style({ width: '100%' })),
        animate('400ms', style({ opacity: 1 }))
    ]),
    transition('desktop => mobile', [
        animate('400ms', style({ opacity: 0 })),
        animate('400ms', style({ width: '40%' })),
        animate('400ms', style({ opacity: 1 })),
    ])
]);

const imageAnimation = trigger('imageTrigger',  [
    state('desktop', style({ width: '100%', height: '{{height}}px' }), { params: { 'height': '200' } }),
    state('mobile', style({ width: '{{width}}px', height: '100%' }), { params: { width: '200' } }),
    transition('desktop => mobile', [
        animate(firstResizingTime, style({ width: '{{width}}px' })),
        query('@*', animateChild()),
        animate(secondResizingTime, style({ height: '100%' })),
    ]),
    transition('mobile => desktop', [
        animate(firstResizingTime, style({ height: '{{height}}px' })),
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