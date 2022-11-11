import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UpDown400 } from '@common/animations/up-down.animation';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, map, merge, Observable } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [UpDown400],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @ViewChild('hoverDetector', { static: true }) hoverDetectorRef!: ElementRef<HTMLElement>;

  hover$?: Observable<boolean>;

  protected state?: 'open' | 'closed';

  protected moonIcon = faMoon;
  protected sunIcon = faSun;

  protected darkModeControl = new FormControl();
  protected darkmode$ = this.darkmodeService.getDarkMode$();

  protected links = [
    { url: 'portfolio', name: 'portfolio' },
    { name: 'blog', url: 'blog' }
  ]

  constructor(protected darkmodeService: DarkModeService) { }

  ngOnInit(): void {
    const enter$ = fromEvent(this.hoverDetectorRef.nativeElement, 'mouseenter').pipe(map(() => true));
    const leave$ = fromEvent(this.hoverDetectorRef.nativeElement, 'mouseleave').pipe(map(() => false));

    this.hover$ = merge(
      enter$,
      leave$
    );
  }
}
