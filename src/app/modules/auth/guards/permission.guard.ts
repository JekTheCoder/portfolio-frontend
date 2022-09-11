import { inject, Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Profile } from '../../_app/models/profile.interface';
import { ProfileService } from '../../_app/services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanLoad {
  constructor(private profile: ProfileService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    const permissions: string[] = route.data?.['permissions'] || [];
    
    if (permissions.length === 0) console.warn('Not permissions required. This should be an error')  

    return this.profile
      .getProfile()
      .pipe(map((profile) => this.hasPemissions(permissions, profile)));
  }

  private hasPemissions(
    requiredPermissions: string[],
    profile?: Profile | null
  ): boolean {
    const userPermissions =
      profile?.__role__.permissions.map((p) => p.name) || [];
    for (const permission of requiredPermissions) {
      if (!userPermissions.includes(permission)) return false;
    }

    return true;
  }
}
