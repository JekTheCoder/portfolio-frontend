import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/modules/blog/models/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog!: Blog

  constructor() { }

  ngOnInit(): void {
  }

}
