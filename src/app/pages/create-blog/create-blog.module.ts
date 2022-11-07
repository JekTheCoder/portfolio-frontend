import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBlogRoutingModule } from './create-blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BlogCreateService } from './service/blog-create.service';
import { NgLetDirective } from '@common/directives/ng-let.directive';
import { CreateBlogComponent } from './create-blog.component';

@NgModule({
  declarations: [
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    CreateBlogRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgLetDirective
  ],
  providers: [BlogCreateService]
})
export class CreateBlogModule { }
