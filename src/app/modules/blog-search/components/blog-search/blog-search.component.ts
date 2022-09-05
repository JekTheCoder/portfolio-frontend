import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPreview } from '../../models/blog-preview.model';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.scss']
})
export class BlogSearchComponent implements OnInit {

  blogs$?: Observable<BlogPreview[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
