import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from './modules/auth/guards/permission.guard';
import { NotFoundComponent } from './modules/_app/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'blog/search',
    loadChildren: () => import('./modules/blog-search/blog-search.module').then(m => m.BlogSearchModule)
  },
  {
    path: 'blog/create',
    loadChildren: () => import('./modules/create-blog/create-blog.module').then(m => m.CreateBlogModule),
    title: 'Blog | create',
    canLoad: [PermissionGuard],
    data: {
      permissions: ['self:blog:create']
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
