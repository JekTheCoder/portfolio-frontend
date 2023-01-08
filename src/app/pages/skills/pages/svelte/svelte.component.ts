import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';

@Component({
	selector: 'app-svelte',
	standalone: true,
	templateUrl: './svelte.component.html',
	styleUrls: ['./svelte.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, SvgIconComponent],
})
export class SvelteComponent {}
