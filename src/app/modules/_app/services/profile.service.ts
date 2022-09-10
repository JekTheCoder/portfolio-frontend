import { Injectable } from '@angular/core';
import { AuthTokensService } from '../../auth/services/auth-tokens.service';
import { Observable, switchMap, of } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private authTokensService: AuthTokensService,
    private http: HttpClient
  ) {}

  readonly profilePath = environment + '/profile';

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
