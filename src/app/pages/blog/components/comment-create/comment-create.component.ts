import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/modules/_app/services/profile.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/modules/_app/models/profile.interface';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent {

  @Output() commentChanges = new EventEmitter<string>();
  protected commentForm = new FormControl<string>('');

  protected profile$?: Observable<Profile | null>;

  constructor(private profile: ProfileService) {
    this.profile$ = profile.getProfile();
  }

  protected emitComment() {
    const comment = this.commentForm.value;
    if (!comment) return;

    this.commentChanges.emit(comment);
    this.commentForm.reset();
  }
}
