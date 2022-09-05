import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogSearchRoutingModule } from './blog-search-routing.module';
import { BlogSearchComponent } from './components/blog-search/blog-search.component';


@NgModule({
  declarations: [
    BlogSearchComponent
  ],
  imports: [
    CommonModule,
    BlogSearchRoutingModule
  ]
})
export class BlogSearchModule { }
