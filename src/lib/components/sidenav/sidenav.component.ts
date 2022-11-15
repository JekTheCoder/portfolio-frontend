import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fadeIn200 } from '@lib/animations/fade-in';
import { leftHidden200 } from '@lib/animations/left-hidden';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [leftHidden200, fadeIn200]
})
export class SidenavComponent implements OnInit {

	isOpen$ = this.sidenav.isOpen();

  constructor(private sidenav: SidenavService) {}

  ngOnInit(): void {}

}
