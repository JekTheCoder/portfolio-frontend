import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent {

  @Output() commentChanges = new EventEmitter<string>();
  protected commentForm = new FormControl<string>('');

  protected emitComment() {
    const comment = this.commentForm.value;
    if (!comment) return;

    this.commentChanges.emit(comment);
    this.commentForm.reset();
  }
}
