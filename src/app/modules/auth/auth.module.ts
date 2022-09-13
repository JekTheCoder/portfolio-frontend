import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { MaterialFileInputModule } from 'ngx-material-file-input';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubAuthComponent } from './components/github-auth/github-auth.component';
import { RegisterComponent } from './components/register/register.component';
import { MatIconModule } from '@angular/material/icon';
import { UsernameService } from './services/username.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MaterialFileInputModule,
    MatIconModule
  ],
  declarations: [LoginComponent, GithubAuthComponent, RegisterComponent],
  providers: [UsernameService]
})
export class AuthModule {}
