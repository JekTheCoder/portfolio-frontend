import { Injectable } from '@angular/core';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

const COMMENT_CREATE = environment.API_URI + '/comments/';

interface CommentDto {
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: AuthHttpClient) { }

  createComment(comment: CommentDto, blogId: number) {
    return this.http.post<Comment>(COMMENT_CREATE + blogId, comment)
  }
}
