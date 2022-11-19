import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { ProfileIconComponent } from '@common/components/profile-icon/profile-icon.component';
import { EditProfileDialogComponent } from './components/edit-profile-dialog/edit-profile-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ProfileComponent, EditProfileDialogComponent],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		NgLetDirective,
		ProfileIconComponent,
		MatButtonModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MaterialFileInputModule,
		MatIconModule,
	],
})
export class ProfileModule {}
