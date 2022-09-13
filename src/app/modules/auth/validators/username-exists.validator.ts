import { AsyncValidatorFn } from '@angular/forms';
import { of } from "rxjs";

export const UsernameNotExists = (service: any): AsyncValidatorFn => () => {
    return of(null);
}