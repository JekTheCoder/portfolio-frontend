import { Injectable } from '@angular/core';
import { AuthHttpClient } from '@core/auth-http/providers/auth-http-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthPageModule } from '../auth-page.module';

@Injectable({
	providedIn: AuthPageModule,
})
export class GithubLinkService {
	protected readonly ROUTE_PATH = environment.API_URI + '/social-media/github';

	constructor(private http: AuthHttpClient) {}

	linkAccountWithGithub(code: string): Observable<void> {
		return this.http.post<void>(this.ROUTE_PATH, { code });
	}
}
