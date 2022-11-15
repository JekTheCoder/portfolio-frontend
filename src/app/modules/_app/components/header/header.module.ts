import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
