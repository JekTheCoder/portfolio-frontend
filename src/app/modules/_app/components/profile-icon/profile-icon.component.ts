import { Component, OnInit } from '@angular/core';
import { animations } from "./profile-icon.animations";
import { Observable, map } from "rxjs";
import { ProfileService } from '../../services/profile.service';
import { AuthTokensService } from 'src/app/modules/auth/services/auth-tokens.service';
import { Profile } from '../../models/profile.interface';

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
    private auth: AuthTokensService
  ) {
    this.profile$ = proService.getProfile();
  }

  ngOnInit(): void {
  }

  protected logout() {
    this.auth.removeToken();
  }

}
