import { Component, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeService } from '../../services/dark-mode.service';
import { animations } from './header.animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations
})
export class HeaderComponent implements OnChanges {

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @HostListener('mouseover')
  protected mouseover() { this.emitOpenState(true); }

  @HostListener('mouseleave')
  protected mouseleave() { this.emitOpenState(false); }
  protected state?: 'open' | 'closed';

  protected moonIcon = faMoon;
  protected sunIcon = faSun;

  protected darkModeControl = new FormControl();
  protected darkmode$ = this.darkMode.getDarkMode$();

  protected links = [
    { url: 'portfolio', name: 'portfolio' },
    { name: 'blog', url: 'blog' }
  ]

  constructor(private darkMode: DarkModeService) { }

  ngOnChanges(): void {
    this.updateState();
  }

  protected updateState() {
    this.state = this.open ? 'open' : 'closed';
  }

  protected emitOpenState(state: boolean) {
    this.open = state;
    this.ngOnChanges();
    this.openChange.emit(state);
  }

  protected setDarkMode(value: boolean) {
    this.darkMode.setDarkMode(value);
  }

}
