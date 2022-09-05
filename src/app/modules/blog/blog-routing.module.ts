import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    'path': 'id/:id',
    pathMatch: 'full',
    component: BlogComponent,
    title: 'Jeshua Hinostroza | blog'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blog/search'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
