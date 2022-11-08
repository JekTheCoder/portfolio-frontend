import { Component, OnInit } from '@angular/core';
import { animations } from "./profile-icon.animations";
import { Observable } from "rxjs";
import { Profile } from '../../models/profile.interface';
import { GithubAuthBuilderService } from '../../services/github-auth-builder.service';
import { ProfileService } from '@core/auth/services/profile.service';
import { AuthTokensService } from '@core/auth/services/auth-tokens.service';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss'],
  animations
})
export class ProfileIconComponent implements OnInit {

  protected overIcon = false;
  protected overPanel = false;

  protected profile$?: Observable<Profile | null>;

  constructor(
    proService: ProfileService,
    private auth: AuthTokensService,
    private githubAuthBuilder: GithubAuthBuilderService,
  ) {
    this.profile$ = proService.getProfile();
  }

  ngOnInit(): void {
  }

  protected logout() {
    this.auth.removeToken();
  }

  protected toGithub(register: boolean) {
    this.githubAuthBuilder.navigateGithubAuth(register, true);
  }

}
