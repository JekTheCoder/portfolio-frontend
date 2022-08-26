import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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

  constructor() { }

  ngOnChanges(): void {
    this.updateState();
  }

  protected updateState() {
    this.state = this.open ? 'open' : 'closed';
    console.log(this.state)
  }

  protected emitOpenState(state: boolean) {
    this.open = state;
    this.ngOnChanges();
    this.openChange.emit(state);
  }

}
