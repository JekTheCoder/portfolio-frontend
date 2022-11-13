import { Component, OnInit, ChangeDetectionStrategy, InjectionToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordeonNavBarComponent } from '../accordeon-nav-bar/accordeon-nav-bar.component';
import { NavGroup } from '../accordeon-nav-bar/nav-group';



export const NAV_GROUPS = new InjectionToken<NavGroup[]>('NAV_GROUPS');

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, AccordeonNavBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {

  constructor(
    @Inject(NAV_GROUPS)
    protected navGroups: NavGroup[]
  ) {}

  ngOnInit(): void {}

}
