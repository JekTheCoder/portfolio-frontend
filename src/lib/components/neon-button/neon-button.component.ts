import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-neon-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neon-button.component.html',
  styleUrls: ['./neon-button.component.scss'],
})
export class NeonButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
