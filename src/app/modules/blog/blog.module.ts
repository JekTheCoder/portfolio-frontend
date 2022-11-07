import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { ProfileIconComponent } from '@common/components/profile-icon/profile-icon.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';

import { NgLetDirective } from '@common/directives/ng-let.directive';
import { BlogsModule } from 'src/app/core/blogs/blogs.module';


@NgModule({
  declarations: [
    BlogComponent,
    CommentsComponent,
    CommentComponent,
    CommentCreateComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ProfileIconComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgLetDirective,
    BlogsModule
  ]
})
export class BlogModule { }
