import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE } from '@common/providers/local-storage.provider';
import { interval, Subject, take, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokensResponse } from '../models/tokens-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthTokensService implements OnDestroy {
  accessToken?: string;

  private stop$ = new Subject<void>();

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
    private http: HttpClient
  ) {}

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  setTokens({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    this.accessToken = accessToken;
    this.localStorage.setItem('refresh_token', refreshToken);

    interval(5000)
      .pipe(take(1), takeUntil(this.stop$))
      .subscribe(() => this.refresh());
  }

  stopRefresh() {
    this.stop$.next();
  }

  private refresh() {
    const refreshToken = this.localStorage.getItem('refresh_token');
    if (!refreshToken) return;

    this.http
      .post<TokensResponse>(`${environment.API_URI}/auth/refresh`, null, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })
      .subscribe(({ token, refreshToken }) =>
        this.setTokens({
          accessToken: token,
          refreshToken
        })
      );
  }

  removeToken() {
    this.stopRefresh();
    this.localStorage.removeItem('refresh_token');
  }
}
