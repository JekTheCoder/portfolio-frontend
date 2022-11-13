import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavGroup } from './nav-group';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-accordeon-nav-bar',
  templateUrl: './accordeon-nav-bar.component.html',
  styleUrls: ['./accordeon-nav-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordeonNavBarComponent implements OnInit, NavGroup {

  @Input() title?: string;
  @Input() src?: string;

  @Input() items!: NavItem[];

  constructor() { }

  ngOnInit(): void {}

}
