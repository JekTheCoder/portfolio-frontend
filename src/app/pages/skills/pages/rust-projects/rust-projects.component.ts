import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';
import {
	LinkedElementsDirective,
	LinkedElementsModule,
	LinkedElementsRouterDirective,
} from 'linked-elements';
import { GithubSrcComponent } from '@lib/components/github-src/github-src.component';

@Component({
	selector: 'app-rust-projects',
	standalone: true,
	imports: [CommonModule, SvgIconComponent, LinkedElementsModule, GithubSrcComponent],
	templateUrl: './rust-projects.component.html',
	styleUrls: ['./rust-projects.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	hostDirectives: [LinkedElementsDirective, LinkedElementsRouterDirective],
})
export class RustProjectsComponent {}
