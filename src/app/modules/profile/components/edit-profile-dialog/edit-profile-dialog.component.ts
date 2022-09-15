import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
