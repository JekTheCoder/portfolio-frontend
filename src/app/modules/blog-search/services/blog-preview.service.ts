import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPreview } from '../models/blog-preview.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPreviewService {

  API_URI = environment.API_URI;

  constructor(private http: HttpClient) { }

  getBlogsReview(): Observable<BlogPreview[]> {
    return this.http.get<BlogPreview[]>(`${this.API_URI}/blogs`)
  }
}
