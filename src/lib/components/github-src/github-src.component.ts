import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
	selector: 'app-github-src',
	standalone: true,
	templateUrl: './github-src.component.html',
	styleUrls: ['./github-src.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, SvgIconComponent],
})
export class GithubSrcComponent {
	@Input() repoName = '';
}
