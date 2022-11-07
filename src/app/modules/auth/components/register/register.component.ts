import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { LoginService } from '../../services/login.service';
import { UsernameService } from '../../../../pages/profile/services/username.service';
import { SameAs } from '../../../../pages/profile/validators/same-as.validator';
import { UsernameNotExists } from '../../../../pages/profile/validators/username-exists.validator';

interface FileValue {
  _files: File[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  protected registerForm = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    repeatPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', Validators.email),
    name: new FormControl(''),
    lastname: new FormControl(''),
  });

  protected profileControl = new FormControl<FileValue | null>(
    null,
    FileValidator.maxContentSize(1048576)
  );

  constructor(
    private loginService: LoginService,
    private location: Location,
    private usernameService: UsernameService
  ) {
    this.registerForm.controls.repeatPassword.addValidators(
      SameAs(this.registerForm.controls.password)
    );

    this.registerForm.controls.username.addAsyncValidators(
      UsernameNotExists(
        this.usernameService,
        this.registerForm.controls.username
      )
    );
  }

  ngOnInit(): void {}

  submit() {
    if (this.registerForm.invalid || this.profileControl.invalid) return;
    const file = this.profileControl.value?._files[0];

    this.loginService
      .register(this.registerForm.value as any, file)
      .subscribe(() => this.location.back());
  }
}
