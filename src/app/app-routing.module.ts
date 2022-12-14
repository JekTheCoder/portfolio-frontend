import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/guards/auth.guard';
import { PermissionGuard } from '@core/auth/guards/permission.guard';
import { NotFoundComponent } from './modules/_app/components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
	},
	{
		path: 'profile',
		loadChildren: () =>
			import('./pages/profile/profile.module').then(m => m.ProfileModule),
		canLoad: [AuthGuard],
	},
	{
		path: 'blog',
		children: [
			{
				path: '',
				pathMatch: 'full',
				loadChildren: () =>
					import('./pages/blog/blog.module').then(m => m.BlogModule),
			},
			{
				path: 'search',
				loadChildren: () =>
					import('./pages/blog-search/blog-search.module').then(
						m => m.BlogSearchModule
					),
			},
			{
				path: 'create',
				loadChildren: () =>
					import('./pages/create-blog/create-blog.module').then(
						m => m.CreateBlogModule
					),
				title: 'Blog | create',
				canLoad: [PermissionGuard],
				data: {
					permissions: ['self:blogs:create'],
				},
			},
		],
	},
	{
		path: 'auth',
		loadChildren: () =>
			import('./pages/auth-page/auth-page.module').then(m => m.AuthPageModule),
	},
	{
		path: 'skills',
		loadChildren: () =>
			import('./pages/skills/skills.module').then(m => m.SkillsModule),
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
