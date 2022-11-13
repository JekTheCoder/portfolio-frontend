import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { NavBarComponent, NAV_GROUPS } from './components/nav-bar/nav-bar.component';
import { navGroups } from './nav-groups';
import { SmoothAnchorModule } from '@lib/directives/smooth-anchor/smooth-anchor.module';


@NgModule({
  declarations: [
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    NavBarComponent,
    SmoothAnchorModule
  ],
  providers: [
    { provide: NAV_GROUPS, useValue: navGroups }
  ]
})
export class SkillsModule { }
