import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../../blog/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogPreviewService {

  API_URI = environment.API_URI;

  constructor(private http: HttpClient) { }

  getBlogsReview(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.API_URI}/blogs`)
  }
}
