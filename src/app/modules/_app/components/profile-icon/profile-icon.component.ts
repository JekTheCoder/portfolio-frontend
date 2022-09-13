import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { animations } from "./profile-icon.animations";
import { Observable, map } from "rxjs";
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss'],
  animations
})
export class ProfileIconComponent implements OnInit {

  protected overIcon = false;
  protected overPanel = false;

  protected isLogged$?: Observable<boolean>;

  constructor(proService: ProfileService) {
    this.isLogged$ = proService.getProfile().pipe(map(profile => Boolean(profile)));
  }

  ngOnInit(): void {
  }

}
