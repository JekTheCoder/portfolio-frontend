import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthHttpClient } from '../../auth-http/providers/auth-http-client';
import { BlogDto } from '../models/blog.dto';

const CREATE_ROUTE = environment.API_URI + '/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogCreateService {

  constructor(private http: AuthHttpClient) { }

  createBlog(blogDto: BlogDto): Observable<BlogDto> {
    return this.http.post<BlogDto>(CREATE_ROUTE, blogDto);
  }
}
