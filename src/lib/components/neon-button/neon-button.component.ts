import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[app-neon-button]',
  standalone: true,
  templateUrl: './neon-button.component.html',
  styleUrls: ['./neon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeonButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
