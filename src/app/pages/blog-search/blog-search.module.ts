import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BlogSearchRoutingModule } from './blog-search-routing.module';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPreviewService } from './services/blog-preview.service';
import { BlogSearchComponent } from './blog-search.component';

@NgModule({
	declarations: [BlogSearchComponent, BlogCardComponent],
	imports: [
		CommonModule,
		BlogSearchRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
	],
	providers: [BlogPreviewService],
})
export class BlogSearchModule {}
