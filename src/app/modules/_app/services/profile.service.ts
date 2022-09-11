import { Injectable } from '@angular/core';
import { AuthTokensService } from '../../auth/services/auth-tokens.service';
import { Observable, switchMap, of, shareReplay } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileCache$?: Observable<Profile>;

  constructor(
    private authTokensService: AuthTokensService,
    private http: AuthHttpClient
  ) {}

  readonly profilePath = environment.API_URI + '/profile';

  getProfile(): Observable<Profile | null> {
    return this.authTokensService
      .getHasAccessToken()
      .pipe(switchMap((value) => (value ? this.getCachedProfile() : of(null))));
  }

  private getCachedProfile(): Observable<Profile> {
    if (!this.profileCache$)
      this.profileCache$ = this.http
        .get<Profile>(this.profilePath)
        .pipe(shareReplay(CACHE_SIZE));
    return this.profileCache$;
  }
}
