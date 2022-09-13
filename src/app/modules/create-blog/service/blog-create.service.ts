import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';
import { Blog } from '../../blog/models/blog';
import { BlogDto } from '../models/blog.dto';

const CREATE_ROUTE = environment.API_URI + '/blogs';
const SET_THUMBNAIL_ROUTE = environment.API_URI + '/blogs-thumbnail/';

@Injectable({
  providedIn: 'root',
})
export class BlogCreateService {
  constructor(private http: AuthHttpClient) {}

  createBlog(blogDto: BlogDto, thumbnail?: File | null): Observable<Blog> {
    const { content, title } = blogDto;

    let request = this.http.post<Blog>(CREATE_ROUTE, { content, title });
    if (!thumbnail) return request;

    return request.pipe(
      switchMap(blog =>
        this.setBlogThumbnail(blog.id, thumbnail).pipe(map(() => blog))
      )
    );
  }

  setBlogThumbnail(blogId: unknown, file: File): Observable<void> {
    const thumbnail = new FormData();
    thumbnail.append('thumbnail', file, file.name);
    return this.http.post<void>(SET_THUMBNAIL_ROUTE + blogId, thumbnail);
  }
}
