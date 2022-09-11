import { inject, Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProfileService } from '../../_app/services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanLoad {

  constructor(private profile: ProfileService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> {
      const permissions: string[] = route.data?.['permissions'] || [];
      return this.profile.getProfile().pipe(map(profile => !!profile));
  }
}
