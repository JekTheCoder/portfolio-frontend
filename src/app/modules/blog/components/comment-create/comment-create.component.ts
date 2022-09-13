import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {

  protected commentForm = new FormControl<string>('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

}
