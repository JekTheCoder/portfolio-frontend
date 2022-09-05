import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPreview } from '../../models/blog-preview.model';
import { BlogPreviewService } from '../../services/blog-preview.service';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.scss']
})
export class BlogSearchComponent implements OnInit {

  blogs$?: Observable<BlogPreview[]> = this.blogService.getBlogsReview();

  constructor(private blogService: BlogPreviewService) { }

  ngOnInit(): void {
  }

}
