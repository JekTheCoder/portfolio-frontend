import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/modules/_app/models/profile.interface';
import { ProfileService } from 'src/app/modules/_app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  protected profile$?: Observable<Profile | null>;

  constructor(profile: ProfileService) {
    this.profile$ = profile.getProfile();
  }

  ngOnInit(): void {}
}
