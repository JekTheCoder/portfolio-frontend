import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/core/blogs/models/blog';
import { BlogPreviewService } from './services/blog-preview.service';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.scss']
})
export class BlogSearchComponent implements OnInit {

  blogs$?: Observable<Blog[]> = this.blogService.getBlogsReview();

  constructor(private blogService: BlogPreviewService) { }

  ngOnInit(): void {
  }

}
