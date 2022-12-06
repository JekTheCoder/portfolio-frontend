import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from '../../services/dark-mode.service';
import { ProfileIconModule } from '../profile-icon/profile-icon.module';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
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
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	protected moonIcon = faMoon;
	protected sunIcon = faSun;

	protected darkModeControl = new FormControl();
	protected darkmode$ = this.darkmodeService.getDarkMode$();

	protected links = [
		{ url: '/home', name: 'home' },
		{ url: '/skills', name: 'potfolio' },
	];

	constructor(protected darkmodeService: DarkModeService) {}

	ngOnInit(): void {}
}
