import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';

@Component({
	selector: 'app-rust-projects',
	standalone: true,
	imports: [CommonModule, SvgIconComponent],
	templateUrl: './rust-projects.component.html',
	styleUrls: ['./rust-projects.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RustProjectsComponent {}
