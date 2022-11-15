import { Directive, HostListener } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Directive({
  selector: '[appOpenSidenav]'
})
export class OpenSidenavDirective {

  constructor(private sidenav: SidenavService) { }

	@HostListener('click')
	onClick() {
    this.sidenav.openSidenav();
  }

}
