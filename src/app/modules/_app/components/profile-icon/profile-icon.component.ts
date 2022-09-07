import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { animations } from "./profile-icon.animations";

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss'],
  animations
})
export class ProfileIconComponent implements OnInit {

  profileIcon = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
