import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SvgIconComponent } from '@lib/components/svg-icon/svg-icon.component';
import { DeepRxjsSectionComponent } from './sections/deep-rxjs-section/deep-rxjs-section.component';
import { ReactiveSectionComponent } from './sections/reactive-section/reactive-section.component';
import { LibrariesSectionComponent } from './sections/libraries-section/libraries-section.component';
import {
	LinkedElementsDirective,
	LinkedElementsModule,
	LinkedElementsRouterDirective,
} from 'linked-elements';

@Component({
	selector: 'app-angular',
	templateUrl: './angular.component.html',
	styleUrls: ['./angular.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		SvgIconComponent,
		ReactiveSectionComponent,
		DeepRxjsSectionComponent,
		LibrariesSectionComponent,
		LinkedElementsModule,
	],
	hostDirectives: [LinkedElementsDirective, LinkedElementsRouterDirective],
})
export class AngularComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
