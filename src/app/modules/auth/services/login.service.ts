import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, switchMap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';
import { TokensResponse } from '../models/tokens-response.interface';
import { AuthTokensService } from './auth-tokens.service';

export interface LoginDto {
  username: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  lastname: string;
  name: string;
  email?: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authTokenService: AuthTokensService,
    private http: HttpClient,
    private authHttp: AuthHttpClient
  ) {}

  private handleTokens(tokens: TokensResponse) {
    const { token, refreshToken } = tokens;
    this.authTokenService.setTokens({
      accessToken: token,
      refreshToken,
    });
  }

  private createLoginObs(path: string, body: object) {
    return this.http
      .post<TokensResponse>(environment.API_URI + path, body)
      .pipe(map((tokens) => this.handleTokens(tokens)));
  }

  login(loginDto: LoginDto) {
    return this.createLoginObs('/auth/login', loginDto);
  }

  register(registerDto: RegisterDto, profile?: File) {
    const obs$ = this.createLoginObs('/auth/register', registerDto);
    if (!profile) return obs$;

    const formData = new FormData();
    formData.append('profile', profile, profile.name);

    return obs$.pipe(
      switchMap(user =>
        this.authHttp.post(environment.API_URI + '/profile/image', formData)
      )
    );
  }

  loginGithub(code: string) {
    return this.createLoginObs('/auth/login/github', { code });
  }

  registerGithub(code: string) {
    return this.createLoginObs('/auth/register/github', { code });
  }
}
