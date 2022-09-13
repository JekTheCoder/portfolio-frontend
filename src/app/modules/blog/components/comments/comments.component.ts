import { Component, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnDestroy {

  @Input('comments$') set commentsSetter(obs: Observable<Comment[]>) {
    this.comments$ = obs;
  }

  protected comments$?: Observable<Comment[]>;
  protected comments: Comment[] = [];

  constructor() { }

  ngOnDestroy(): void {
      
  }
}
