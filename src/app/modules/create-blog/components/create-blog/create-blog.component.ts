import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BlogDto } from '../../models/blog.dto';
import { BlogCreateService } from '../../service/blog-create.service';
import { animations } from "./create-blog.animations";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
  animations
})
export class CreateBlogComponent implements OnInit {

  blogCreated$?: Observable<BlogDto>;

  blogForm = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: Validators.required }),
    content: new FormControl('',  { nonNullable: true, validators: Validators.required }),
  })

  constructor(private blogS: BlogCreateService) { }

  ngOnInit(): void {
  }

  createBlog() {
    if (this.blogForm.invalid) return;
    this.blogCreated$ = this.blogS.createBlog(this.blogForm.value as BlogDto);
  }

  reset() {
    this.blogForm.reset();
    this.blogCreated$ = undefined;
  }

}
