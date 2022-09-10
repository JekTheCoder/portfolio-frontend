import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { GithubService } from '../../services/github.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-github-auth',
  templateUrl: './github-auth.component.html',
  styleUrls: ['./github-auth.component.scss'],
})
export class GithubAuthComponent implements OnInit {
  messageShown = 0;

  code?: string;
  email: boolean = false;
  login: boolean = false;

  redirect_to?: string;

  constructor(
    route: ActivatedRoute,
    private loginService: LoginService,
    private githubService: GithubService,
    private router: Router
  ) {
    route.queryParams.pipe(take(1)).subscribe({
      next: (map) => this.setData(map),
      complete: () => this.handleGithubCode()
    });
  }

  ngOnInit(): void {}

  private setData(map: { [key in string]?: string }) {
    this.login = map['register'] !== 'true';
    this.email = map['email'] === 'true';
    this.code = map['code'];
    this.redirect_to = map['redirect_to'];
  }

  private handleGithubCode() {
    const code = this.code;
    if (!code) return this.redirectToGithub();

    this.authenticate(code, this.login)
  }

  protected authenticate(code: string, login: boolean) {
    const authReq = login
      ? this.loginService.loginGithub(code)
      : this.loginService.registerGithub(code);

    authReq.subscribe({
      error: e => this.handleError(e),
      next: () => this.getBack()
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status !== 401) { this.messageShown = -1; return; };

    this.messageShown = 1;
  }

  protected getBack() {
    let redirecTo = this.redirect_to || '/';
    this.router.navigate([redirecTo]);
  }

  protected redirectToGithub() {
    this.githubService.redirectToGithubAuth(this.login, this.email)
  }
}
