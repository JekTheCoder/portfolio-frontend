import { Injectable } from '@angular/core';
import { AuthTokensService } from '../../auth/services/auth-tokens.service';
import {
  Observable,
  switchMap,
  of,
  map,
  ReplaySubject,
  tap,
} from 'rxjs';
import { Profile } from '../models/profile.interface';
import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '@core/auth-http/providers/auth-http-client';
import { AuthModule } from '../auth.module';

@Injectable({
  providedIn: AuthModule,
})
export class ProfileService {
  private profileCache$ = new ReplaySubject<Profile>();

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

  updateProfile(profile: any, profileImage?: File): Observable<Profile> {
    let profile$ = this.appendProfile(
      this.http
        .put<void>(this.profilePath, profile)
        .pipe(switchMap(() => this.http.get<Profile>(this.profilePath)))
    );
    if (!profileImage) return profile$;

    profile$ = profile$.pipe(
      switchMap((profile) =>
        this.postProfileImage(profileImage).pipe(map(() => profile))
      )
    );

    profile$.subscribe();
    return this.profileCache$.asObservable();
  }

  private getCachedProfile(): Observable<Profile> {
    this.appendProfile(this.http.get<Profile>(this.profilePath)).subscribe();
    return this.profileCache$.asObservable();
  }

  private appendProfile(obs: Observable<Profile>) {
    return obs.pipe(
      tap({
        next: (p) => this.profileCache$.next(p),
        error: (e) => this.profileCache$.error(e),
      })
    );
  }

  postProfileImage(profileImage: File) {
    const form = new FormData();
    form.append('profile', profileImage, profileImage.name);

    return this.http.post<void>(this.profilePath + '/image', form);
  }
}
