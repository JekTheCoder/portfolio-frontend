import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { NavBarComponent, NAV_GROUPS } from './components/nav-bar/nav-bar.component';
import { navGroups } from './nav-groups';


@NgModule({
  declarations: [
    SkillsComponent,
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    NavBarComponent
  ],
  providers: [
    { provide: NAV_GROUPS, useValue: navGroups }
  ]
})
export class SkillsModule { }
