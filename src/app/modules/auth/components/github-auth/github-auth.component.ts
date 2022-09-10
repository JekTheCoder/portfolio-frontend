import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skip, take } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-github-auth',
  templateUrl: './github-auth.component.html',
  styleUrls: ['./github-auth.component.scss'],
})
export class GithubAuthComponent implements OnInit {

  code?: string;
  register?: string;

  constructor(route: ActivatedRoute, private loginService: LoginService) {
    route.queryParams.pipe(take(1)).subscribe({
      next: map => {
        const { code, register } = map as { [key in string]?: string };
        this.code = code;
        this.register = register;
      },
      complete: () => this.AuthWithGithub(this.code, this.register) 
    });
  }

  ngOnInit(): void {}

  AuthWithGithub(code?: string, register?: string) {
    const login = register !== 'true';
    console.log(code, register)
  }
}
