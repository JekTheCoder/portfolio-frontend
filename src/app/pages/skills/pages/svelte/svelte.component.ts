import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';
import {
	LinkedElementsDirective,
	LinkedElementsModule,
	LinkedElementsRouterDirective,
} from 'linked-elements';
import { GithubSrcComponent } from '@lib/components/github-src/github-src.component';
import { ShadowHoverComponent } from '@lib/components/shadow-hover/shadow-hover.component';

@Component({
	selector: 'app-svelte',
	standalone: true,
	templateUrl: './svelte.component.html',
	styleUrls: ['./svelte.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	hostDirectives: [LinkedElementsDirective, LinkedElementsRouterDirective],
	imports: [
		CommonModule,
		SvgIconComponent,
		LinkedElementsModule,
		GithubSrcComponent,
		ShadowHoverComponent,
	],
})
export class SvelteComponent {}
