import { AbstractControl, ValidatorFn } from "@angular/forms";

export const SameAs = (otherControl: AbstractControl): ValidatorFn => (control: AbstractControl) => {
    return otherControl.value === control.value ? null : { not_equal: 'not equal' };
}