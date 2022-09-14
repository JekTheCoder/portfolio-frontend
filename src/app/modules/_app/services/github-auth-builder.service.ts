import { DOCUMENT, Location } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GithubAuthBuilderService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) { }

  navigateGithubAuth(register: boolean, withEmail: boolean): void {

    this.router.navigate(['auth/github-auth'], {
      queryParams: {
        register,
        email: withEmail,
        redirect_to: this.router.url
      }
    });
  } 
}
