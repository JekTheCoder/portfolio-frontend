import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { NavBarComponent, NAV_GROUPS } from './components/nav-bar/nav-bar.component';
import { navGroups } from './nav-groups';
import { SidenavModule } from '@lib/components/sidenav/sidenav.module';
import { MatButtonModule } from '@angular/material/button';
import { SidenavCloserDirective } from './directives/sidenav-closer.directive';

@NgModule({
	declarations: [SkillsComponent, SidenavCloserDirective],
	imports: [CommonModule, SkillsRoutingModule, NavBarComponent, SidenavModule, MatButtonModule],
	providers: [{ provide: NAV_GROUPS, useValue: navGroups }],
})
export class SkillsModule {}
