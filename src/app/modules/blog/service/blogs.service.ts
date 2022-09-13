import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private blogUrl = environment.API_URI + '/blogs/'

  constructor(private http: HttpClient) { }

  getBlog(id: unknown): Observable<Blog | null> {
    return this.http.get<Blog | null>(this.blogUrl + id);

  }
}
