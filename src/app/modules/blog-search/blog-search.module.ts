import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BlogSearchRoutingModule } from './blog-search-routing.module';
import { BlogSearchComponent } from './components/blog-search/blog-search.component';


@NgModule({
  declarations: [
    BlogSearchComponent
  ],
  imports: [
    CommonModule,
    BlogSearchRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BlogSearchModule { }
