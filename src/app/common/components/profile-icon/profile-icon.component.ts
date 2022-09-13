import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'profile-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.scss'],
})
export class ProfileIconComponent implements OnInit {
  @Input() set image(val: string | { src: string; alt?: string }) {
    if (typeof val === 'string') {
      this.src = val;
      return;
    };

    this.src = val.src;
    this.alt = val.alt;
  }

  profileIcon = faUser;

  protected src?: string;
  protected alt?: string;

  constructor() {}

  ngOnInit(): void {}
}
