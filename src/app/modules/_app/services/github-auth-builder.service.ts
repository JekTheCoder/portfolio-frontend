import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubAuthBuilderService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  getGithubAuthRoute(register: boolean, withEmail: boolean): string {
    return `/auth/github-auth?register=${register}&email=${withEmail}&redirect_to=${this.document.location.href}`;
  }
}
