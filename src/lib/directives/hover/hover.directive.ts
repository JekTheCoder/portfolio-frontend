import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
	selector: '[appHover]',
	standalone: true,
})
export class HoverDirective {
	@Output('appHover') hover = new EventEmitter<boolean>();

	constructor() {}

	@HostListener('mouseenter')
	onEnter() {
		this.hover.emit(true);
	}

	@HostListener('mouseleave')
	onLeave() {
		this.hover.emit(false);
	}
}
