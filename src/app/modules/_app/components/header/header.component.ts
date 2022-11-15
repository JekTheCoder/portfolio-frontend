import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	protected moonIcon = faMoon;
	protected sunIcon = faSun;

	protected darkModeControl = new FormControl();
	protected darkmode$ = this.darkmodeService.getDarkMode$();

	protected links = [
		{ url: 'portfolio', name: 'portfolio' },
		{ name: 'blog', url: 'blog' },
	];

	constructor(protected darkmodeService: DarkModeService) {}

	ngOnInit(): void {}
}
