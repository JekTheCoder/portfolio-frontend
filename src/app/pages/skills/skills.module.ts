import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { NavBarComponent, NAV_GROUPS } from './components/nav-bar/nav-bar.component';
import { navGroups } from './nav-groups';
import { SidenavModule } from '@lib/components/sidenav/sidenav.module';
import { MatButtonModule } from '@angular/material/button';
import { SidenavCloserDirective } from './directives/sidenav-closer.directive';
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { MatIconModule } from '@angular/material/icon';
import { PageNavComponent } from './components/page-nav/page-nav.component';

@NgModule({
	declarations: [SkillsComponent, SidenavCloserDirective],
	providers: [{ provide: NAV_GROUPS, useValue: navGroups }],
	imports: [
		CommonModule,
		SkillsRoutingModule,
		NavBarComponent,
		SidenavModule,
		MatButtonModule,
		StickyHeaderComponent,
		MatIconModule,
		PageNavComponent,
		MatIconModule
	],
})
export class SkillsModule {}
