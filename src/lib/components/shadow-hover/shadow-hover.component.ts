import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shadow-hover',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './shadow-hover.component.html',
	styleUrls: ['./shadow-hover.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'shadow-sm shadow-white/30 relative inline-block'
	}
})
export class ShadowHoverComponent {}
