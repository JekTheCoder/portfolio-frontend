import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE } from '@common/providers/local-storage.provider';
import { interval, Subject, take, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthTokensService implements OnDestroy {

  accessToken?: string;

  private stop$ = new Subject<void>();

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
    private http: HttpClient,
  ) { }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  setTokens({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) {
    this.accessToken = accessToken;
    this.localStorage.setItem('refresh_token', refreshToken);

    interval(5000)
      .pipe(take(1), takeUntil(this.stop$))
      .subscribe();
  }

  stopRefresh() {
    this.stop$.next();
  }
}
