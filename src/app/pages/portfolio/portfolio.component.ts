import { Component } from '@angular/core';
import { SmoothAnchorService } from '@lib/directives/smooth-anchor/smooth-anchor.service';
import { DarkModeService } from 'src/app/modules/_app/services/dark-mode.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [SmoothAnchorService]
})
export class PortfolioComponent {
  isDark$ = this.dark.getDarkMode$();

  constructor(private dark: DarkModeService) {}
}
