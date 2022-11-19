import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { RouterModule } from '@angular/router';

import { NgLetDirective } from '@common/directives/ng-let.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileIconModule } from '../profile-icon/profile-icon.module';
import { HeaderComponent } from './header.component';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatIconModule,
		MatSlideToggleModule,
		FormsModule,
		FontAwesomeModule,
		NgLetDirective,
		MatButtonModule,
		ProfileIconModule,
	],
	exports: [HeaderComponent],
})
export class HeaderModule {}
