import { AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { UsernameService } from '../services/username.service';

export const UsernameNotExists =
  (service: UsernameService, control: { value: string }): AsyncValidatorFn =>
  () => {
    return service
      .usernameExists(control.value)
      .pipe(map((exists) => (exists ? { user_exists: true } : null)));
  };
