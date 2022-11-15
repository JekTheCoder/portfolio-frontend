import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogsModule } from '../blogs.module';
import { BlogContent } from '../models/blog-content';

@Injectable({
	providedIn: BlogsModule,
})
export class BlogsService {
	private blogUrl = environment.API_URI + '/blogs/';

	constructor(private http: HttpClient) {}

	getBlog(id: unknown): Observable<BlogContent | null> {
		return this.http.get<BlogContent | null>(this.blogUrl + id);
	}
}
