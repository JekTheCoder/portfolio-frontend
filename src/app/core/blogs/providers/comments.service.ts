import { Injectable } from '@angular/core';
import { AuthHttpClient } from '@core/auth-http/providers/auth-http-client';
import { environment } from 'src/environments/environment';
import { BlogsModule } from '../blogs.module';
import { Comment } from '../models/comment';

const COMMENT_CREATE = environment.API_URI + '/comments/';

interface CommentDto {
	content: string;
}

@Injectable({
	providedIn: BlogsModule,
})
export class CommentsService {
	constructor(private http: AuthHttpClient) {}

	createComment(comment: CommentDto, blogId: unknown) {
		return this.http.post<Comment>(COMMENT_CREATE + blogId, comment);
	}
}
