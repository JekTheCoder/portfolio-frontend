import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto, LoginService } from '../../services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	protected loginInvalid = false;

	protected loginForm = new FormGroup({
		username: new FormControl('', {
			nonNullable: true,
			validators: [Validators.required],
		}),
		password: new FormControl('', {
			nonNullable: true,
			validators: [Validators.required],
		}),
	});

	constructor(private loginService: LoginService, private location: Location) {}

	ngOnInit(): void {}

	submit() {
		if (this.loginForm.invalid) return;

		this.loginService.login(this.loginForm.value as LoginDto).subscribe({
			error: e => this.handleError(e),
			next: () => this.handleSuccess(),
		});
	}

	handleError(error: HttpErrorResponse) {
		if (error.status === 401) this.loginInvalid = true;
	}

	handleSuccess() {
		this.location.back();
	}
}
