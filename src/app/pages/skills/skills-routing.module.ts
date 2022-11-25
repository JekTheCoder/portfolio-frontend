import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/home',
	},
	{
		path: '',
		pathMatch: 'prefix',
		component: SkillsComponent,
		children: [
			{
				path: 'angular',
				loadComponent: () =>
					import('./pages/angular/angular.component').then(
						m => m.AngularComponent
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
