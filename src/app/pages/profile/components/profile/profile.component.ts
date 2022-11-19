import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ProfileService } from '@core/auth/services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/modules/_app/models/profile.interface';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
	protected profile$?: Observable<Profile | null>;

	constructor(profile: ProfileService, private dialog: MatDialog) {
		this.profile$ = profile.getProfile();
	}

	ngOnInit(): void {}

	protected openDialog() {
		this.dialog.open(EditProfileDialogComponent);
	}
}
