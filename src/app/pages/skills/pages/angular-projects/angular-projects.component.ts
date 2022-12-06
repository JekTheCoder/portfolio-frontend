import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';
import { DevSourceComponent } from '@lib/components/dev-source/dev-source.component';
import {
	LinkedElementsDirective,
	LinkedElementsModule,
	LinkedElementsRouterDirective,
} from 'linked-elements';

@Component({
	selector: 'app-angular-projects',
	standalone: true,
	templateUrl: './angular-projects.component.html',
	styleUrls: ['./angular-projects.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, SvgIconComponent, DevSourceComponent, LinkedElementsModule],
	hostDirectives: [LinkedElementsDirective, LinkedElementsRouterDirective],
})
export class AngularProjectsComponent {}
