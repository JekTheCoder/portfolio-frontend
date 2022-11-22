import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/modules/_app/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavModule } from '@lib/components/sidenav/sidenav.module';

@Component({
	selector: 'app-sticky-header',
	standalone: true,
	imports: [
		CommonModule,
		HeaderComponent,
		MatIconModule,
		MatButtonModule,
		SidenavModule,
	],
	templateUrl: './sticky-header.component.html',
	styleUrls: ['./sticky-header.component.scss'],
})
export class StickyHeaderComponent {}
