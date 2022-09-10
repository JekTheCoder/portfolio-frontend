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
  code?: string;
  register?: string;
  email?: string;

  constructor(
    route: ActivatedRoute,
    private loginService: LoginService,
    private githubService: GithubService,
    private router: Router
  ) {
    route.queryParams.pipe(take(1)).subscribe({
      next: (map) => {
        const { code, register, email } = map as { [key in string]?: string };
        this.code = code;
        this.register = register;
        this.email = email;
      },
      complete: () => this.AuthWithGithub(this.code, this.register, this.email),
    });
  }

  ngOnInit(): void {}

  AuthWithGithub(code?: string, register?: string, email?: string) {
    const login = register !== 'true';
    const email_ = email === 'true';

    if (!code) {
      this.githubService.redirectToGithubAuth(login, email_);
      return;
    }

    this.authenticate(code, login);
  }

  protected authenticate(code: string, login: boolean) {
    const authReq = login
      ? this.loginService.loginGithub(code)
      : this.loginService.registerGithub(code);

    authReq.subscribe({
      error: console.error,
    });
  }

  protected getBack() {
    this.router.navigate(['/']);
  }

  protected redirectToGithub() {
    
  }
}
