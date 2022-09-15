import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';


interface FileValue {
  _files: File[];
}


@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent implements OnInit {

  protected form = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', Validators.email)
  })

  protected profileControl = new FormControl<FileValue | null>(null, FileValidator.maxContentSize(1048576));

  constructor() { }

  ngOnInit(): void {
  }

}
