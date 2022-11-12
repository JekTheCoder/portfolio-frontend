import { Component, OnInit, InjectionToken, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

export const ICONS_PATH = new InjectionToken<string>('ICONS_PATH');

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() icon!: string;

  constructor(
    @Inject(ICONS_PATH) protected iconsPath: string
  ) {}
  
  ngOnInit(): void {
    if (!this.icon) throw new Error('Name must be provided');
  }

}
