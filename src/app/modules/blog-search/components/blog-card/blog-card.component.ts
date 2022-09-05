import { Component, Input, OnInit } from '@angular/core';
import { BlogPreview } from '../../data/blog-preview.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog!: BlogPreview

  constructor() { }

  ngOnInit(): void {
  }

}
