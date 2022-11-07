import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSearchComponent } from './blog-search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlogSearchComponent,
    title: 'Jeshua Hinostroza | blog'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogSearchRoutingModule { }
