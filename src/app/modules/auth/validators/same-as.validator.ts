import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export const SameAs = (name: string): ValidatorFn => (control: AbstractControl) => {
    const controlParent = control.parent as FormGroup;
    if(control.value !== controlParent.controls[name].value) return { notSame: true };

    return null;
}