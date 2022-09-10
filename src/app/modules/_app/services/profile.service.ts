import { Injectable } from '@angular/core';
import { AuthTokensService } from '../../auth/services/auth-tokens.service';
import { Observable, switchMap, of } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private authTokensService: AuthTokensService,
    private http: AuthHttpClient
  ) {}

  readonly profilePath = environment.API_URI + '/profile';

  getProfile(): Observable<Profile | null> {
    return this.authTokensService
      .getHasAccessToken()
      .pipe(
        switchMap((value) =>
          value ? this.http.get<Profile>(this.profilePath) : of(null)
        )
      );
  }
}
