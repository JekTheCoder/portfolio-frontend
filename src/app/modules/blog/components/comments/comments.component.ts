import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, takeUntil, Subject } from 'rxjs';
import { Comment } from 'src/app/core/blogs/models/comment';
import { CommentsService } from 'src/app/core/blogs/providers/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnDestroy {
  @Input() blogId!: unknown;
  @Input('comments$') set commentsSetter(obs: Observable<Comment[]>) {
    this.comments$ = obs;
    this.overrideComments();
  }

  protected comments$?: Observable<Comment[]>;
  protected comments: Comment[] = [];

  private unsuscriber$ = new Subject<void>();

  constructor(private commentsService: CommentsService) {}

  ngOnDestroy(): void {}

  private overrideComments() {
    this.comments$!.subscribe(comments => this.comments = comments);
  }

  protected postComment(comment: string) {
    this.commentsService
      .createComment({ content: comment }, this.blogId)
      .pipe(takeUntil(this.unsuscriber$))
      .subscribe(comment => this.comments.unshift(comment));
  }
}
