import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkedElementsDirective } from 'linked-elements';
import { DarkModeService } from 'src/app/modules/_app/services/dark-mode.service';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss'],
	hostDirectives: [LinkedElementsDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
	isDark$ = this.dark.getDarkMode$();

	constructor(private dark: DarkModeService) {}
}
