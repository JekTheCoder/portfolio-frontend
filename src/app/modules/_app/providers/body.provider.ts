import { InjectionToken } from "@angular/core";

export const BODY = new InjectionToken('body', {
    providedIn: 'root',
    factory: () => document.body
});