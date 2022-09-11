import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  blogForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: Validators.required }),
    content: new FormControl('',  { nonNullable: true, validators: Validators.required }),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
