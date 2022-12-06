import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'angular',
	},
	{
		path: '',
		pathMatch: 'prefix',
		component: SkillsComponent,
		children: [
			{
				path: 'angular',
				title: 'Jeshua | Angular',
				loadComponent: () =>
					import('./pages/angular/angular.component').then(
						m => m.AngularComponent
					),
			},
			{
				path: 'angular-projects',
				title: 'Jeshua | Angular Projects And Experience',
				loadComponent: () =>
					import('./pages/angular-projects/angular-projects.component').then(
						m => m.AngularProjectsComponent
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SkillsRoutingModule {}
