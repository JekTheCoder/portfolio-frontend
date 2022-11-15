import { Directive, HostListener } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Directive({
	selector: '[appCloseSidenav]',
})
export class CloseSidenavDirective {
	constructor(private sidenav: SidenavService) {}

	@HostListener('click')
	onClick() {
		this.sidenav.closeSidenav();
	}
}
