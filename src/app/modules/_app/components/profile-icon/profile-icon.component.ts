import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss']
})
export class ProfileIconComponent implements OnInit {

  profileIcon = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
