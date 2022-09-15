import { Injectable } from '@angular/core';
import { AuthTokensService } from '../../auth/services/auth-tokens.service';
import {
  Observable,
  switchMap,
  of,
  shareReplay,
  map,
  ReplaySubject,
  tap
} from 'rxjs';
import { Profile } from '../models/profile.interface';
import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root',
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
    const profile$ = this.appendProfile(this.http.put<Profile>(this.profilePath, profile));
    if (!profileImage) return profile$;

    return profile$.pipe(
      switchMap((profile) =>
        this.postProfileImage(profileImage).pipe(map(() => profile))
      )
    );
  }

  private getCachedProfile(): Observable<Profile> {
    const obs = this.http.get<Profile>(this.profilePath);
    this.appendProfile(obs);
    return obs;
  }

  private appendProfile(obs: Observable<Profile>) {
    return obs.pipe(tap({
      next: (p) => this.profileCache$.next(p),
      error: (e) => this.profileCache$.error(e),
    }));
  }

  postProfileImage(profileImage: File) {
    const form = new FormData();
    form.append('profile', profileImage, profileImage.name);

    return this.http.post<void>(this.profilePath + '/image', form);
  }
}
