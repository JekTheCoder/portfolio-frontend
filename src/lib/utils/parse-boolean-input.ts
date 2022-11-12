import { BooleanInput } from "@angular/cdk/coercion";

export function parseBooleanInput(value: BooleanInput): boolean {
    if (value === undefined || value === null) return false;

    return typeof value === 'string' ? true : value;
}