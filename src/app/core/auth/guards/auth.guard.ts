import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthTokensService } from '../services/auth-tokens.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanLoad {
	constructor(private authTokens: AuthTokensService) {}

	canLoad(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authTokens.getHasAccessToken();
	}
}
