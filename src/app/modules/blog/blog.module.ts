import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { ProfileIconComponent } from '@common/components/profile-icon/profile-icon.component';


@NgModule({
  declarations: [
    BlogComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ProfileIconComponent
  ]
})
export class BlogModule { }
