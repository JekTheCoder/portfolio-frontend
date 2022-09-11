import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { CreateBlogRoutingModule } from './create-blog-routing.module';



@NgModule({
  declarations: [
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    CreateBlogRoutingModule
  ]
})
export class CreateBlogModule { }
