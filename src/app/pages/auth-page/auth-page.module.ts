import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHttpModule } from '@core/auth-http/auth-http.module';
import { GithubAuthComponent } from './components/github-auth/github-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
	declarations: [GithubAuthComponent, LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		AuthPageRoutingModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatStepperModule,
		MaterialFileInputModule,
		MatIconModule,
		AuthHttpModule,
	],
})
export class AuthPageModule {}
