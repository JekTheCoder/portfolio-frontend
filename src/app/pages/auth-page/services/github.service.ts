import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AuthPageModule } from '../auth-page.module';

@Injectable({
	providedIn: AuthPageModule,
})
export class GithubService {
	githubHref =
		'https://github.com/login/oauth/authorize?client_id=' +
		environment.githubClientId +
		'&scope=';
	redirectUri = '&redirect_uri=' + this.document.location.origin + '/auth/github-auth';

	constructor(@Inject(DOCUMENT) private document: Document) {}

	redirectToGithubAuth(mode: string, email?: boolean, redirect_to = '/') {
		let githubHref = this.githubHref.slice();
		if (email) githubHref += 'user:email';

		githubHref += this.redirectUri + '?mode=' + mode + '&redirect_to=' + redirect_to;

		this.document.location.href = githubHref;
	}
}
