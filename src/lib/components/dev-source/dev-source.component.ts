import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dev-source',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, FontAwesomeModule],
  templateUrl: './dev-source.component.html',
  styleUrls: ['./dev-source.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'flex gap-x-2'
	}
})
export class DevSourceComponent {
	@Input() githubSrc = '';
	@Input() webSrc = '';

	faGlobe = faGlobe;
}


