import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments$?: Observable<Comment[] | undefined | null>

  constructor() { }

  ngOnInit(): void {
  }

}
