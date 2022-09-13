import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SameAs } from '../../validators/same-as.validator';

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

  constructor() {
    this.registerForm.controls.repeatPassword.addValidators(
      SameAs(this.registerForm.controls.password)
    );
  }

  ngOnInit(): void {}

  submit() {}
}
