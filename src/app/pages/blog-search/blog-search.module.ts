import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

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
