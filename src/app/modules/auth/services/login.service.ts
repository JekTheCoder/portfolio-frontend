import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TokensResponse } from '../models/tokens-response.interface';
import { AuthTokensService } from './auth-tokens.service';

export interface LoginDto {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private authTokenService: AuthTokensService,
    private http: HttpClient
  ) {}

  private handleTokens(tokens: TokensResponse) {
    const { access_token, refresh_token } = tokens;
    this.authTokenService.setTokens({
      accessToken: access_token,
      refreshToken: refresh_token,
    });
  }

  private createLoginObs(path: string, body: object) {
    return this.http.post<TokensResponse>(environment.API_URI + path, body).pipe(
      map((tokens) => this.handleTokens(tokens))
    );
  }

  login(loginDto: LoginDto) {
    return this.createLoginObs('/auth/login', loginDto);
  }

  register(registerDto: any) {
    return this.createLoginObs('/auth/register', registerDto);
  }

  loginGithub(code: string) {
    return this.createLoginObs('/auth/login/github', { code });
  }

  registerGithub(code: string) {
    return this.createLoginObs('/auth/register/github', { code });
  }
}
