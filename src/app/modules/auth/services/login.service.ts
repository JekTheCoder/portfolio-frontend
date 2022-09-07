import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokensResponse } from '../models/tokens-response.interface';
import { AuthTokensService } from './auth-tokens.service';

interface LoginDto {
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

  login(loginDto: LoginDto) {
    this.http
      .post<TokensResponse>(`${environment.API_URI}/auth/login`, loginDto)
      .subscribe((tokens) =>
        this.authTokenService.setTokens({
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
        })
      );
  }
}
