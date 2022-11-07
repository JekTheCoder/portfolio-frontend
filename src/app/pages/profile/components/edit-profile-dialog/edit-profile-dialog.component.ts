import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileValidator } from 'ngx-material-file-input';
import { Observable } from 'rxjs';
import { UsernameService } from 'src/app/pages/profile/services/username.service';
import { UsernameNotExists } from 'src/app/pages/profile/validators/username-exists.validator';
import { Profile } from 'src/app/modules/_app/models/profile.interface';

import { ProfileService } from 'src/app/modules/_app/services/profile.service';


interface FileValue {
  _files: File[];
}


@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent implements OnInit {

  protected profile$?: Observable<Profile>;

  protected form = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', Validators.email)
  })

  protected profileControl = new FormControl<FileValue | null>(null, FileValidator.maxContentSize(1048576));

  constructor(
    private usersService: UsernameService,
    private profile: ProfileService,
    @Optional() private dialogRef?: MatDialogRef<EditProfileDialogComponent>
  ) {
    this.form.controls.username.addAsyncValidators(UsernameNotExists(usersService, this.form.controls.username));
  }

  ngOnInit(): void {
  }

  protected submit() {
    if (!this.form.touched && (this.form.invalid || this.profileControl.invalid)) return;

    const value = this.getTouchedValues();
    const file = this.profileControl.value?._files[0];

    this.profile$ = this.profile.updateProfile(value, file);
    this.profile$.subscribe({
      next: () => this.dialogRef?.close()
    });
  }

  private getTouchedValues() {
    let value: { [key in string]: unknown } = {};
    Object.entries(this.form.controls).forEach(([key, control]) => {
      if (control.touched) value[key] = control.value;
    });

    return value;
  }

}
