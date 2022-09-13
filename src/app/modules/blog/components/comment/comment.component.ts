import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comment;

  protected readonly commentPreviewLen = 100;
  protected expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

}
