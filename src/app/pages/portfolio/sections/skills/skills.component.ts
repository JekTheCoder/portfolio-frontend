import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
	@Input() height?: number;
	@Input() skills: string[] = [];

	constructor() {}

	ngOnInit(): void {}
}
