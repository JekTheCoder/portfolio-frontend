import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, take, tap } from 'rxjs';
import { GithubLinkService } from '../../services/github-link.service';
import { GithubService } from '../../services/github.service';
import { LoginService } from '../../services/login.service';

type Modes = readonly ['login', 'register', 'link'];
type Mode = Modes[number];
interface Data {
  mode: Mode,
  email: boolean,
  code?: string,
  redirect_to?: string
}

@Component({
  selector: 'app-github-auth',
  templateUrl: './github-auth.component.html',
  styleUrls: ['./github-auth.component.scss'],
})
export class GithubAuthComponent implements OnInit {
  messageShown = 0;

  protected readonly modes: Modes = ['login', 'register', 'link'] as const;
  protected redirect_to?: string;
  protected mode?: Mode;
  protected email?: boolean;

  constructor(
    route: ActivatedRoute,
    private loginService: LoginService,
    private githubService: GithubService,
    private githubLink: GithubLinkService,
    private router: Router
  ) {
    route.queryParams.pipe(
      take(1), 
      map(queryParam => this.setData(queryParam)), 
      map(data => this.redirectIfCodeNull(data)),
      switchMap(data => this.authenticate(data))
    ).subscribe();
  }

  ngOnInit(): void {}

  private setData(map: { [key in string]?: string }): Data {
    const email = map['email'] === 'true';
    const mode = this.modes.find(mode => map['mode'] === mode) || 'login';
    const redirect_to = map['redirect_to'];

    this.email = email;
    this.mode = mode;
    this.redirect_to = redirect_to;

    return {
      mode,
      email,
      code: map['code'],
      redirect_to
    }
  }

  redirectIfCodeNull(data: Data) {
    if (!data.code) {
      this.redirectToGithub();
      throw new Error();
    }
    return data as Data & { code: string };
  }

  protected authenticate(data: Data & { code: string }) {
    const authReq = data.mode === 'login' ? 
    this.loginService.loginGithub(data.code) :
    data.mode === 'register' ? 
    this.loginService.registerGithub(data.code) :
    this.githubLink.linkAccountWithGithub(data.code);

    return authReq.pipe(tap(({
      error: e => this.handleError(e),
      next: () => this.getBack()
    })));
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
    this.githubService.redirectToGithubAuth(this.mode || 'login', this.email, this.redirect_to);
  }
}
