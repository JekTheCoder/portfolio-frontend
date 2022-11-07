import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/blogs/models/blog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog!: Blog;
  imagePath = environment.API_URI + '/public/blogs/';

  constructor() { }

  ngOnInit(): void {
  }

}
