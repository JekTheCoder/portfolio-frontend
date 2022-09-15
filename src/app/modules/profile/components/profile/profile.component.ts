import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/modules/_app/models/profile.interface';
import { ProfileService } from 'src/app/modules/_app/services/profile.service';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  protected profile$?: Observable<Profile | null>;

  constructor(
    profile: ProfileService,
    private dialog: MatDialog,
  ) {
    this.profile$ = profile.getProfile();
  }

  ngOnInit(): void {}

  protected openDialog() {
    this.dialog.open(EditProfileDialogComponent);
  }
}
