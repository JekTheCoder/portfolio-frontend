import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { UpDown400 } from '@common/animations/up-down.animation';
import { fromEvent, map, merge, Observable } from 'rxjs';

@Component({
	selector: 'app-sticky-header',
	standalone: true,
	imports: [CommonModule, HeaderModule],
	templateUrl: './sticky-header.component.html',
	styleUrls: ['./sticky-header.component.scss'],
	animations: [UpDown400],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StickyHeaderComponent implements OnInit {
	@ViewChild('hoverDetector', { static: true })
	hoverDetectorRef!: ElementRef<HTMLElement>;
	hover$?: Observable<boolean>;

	constructor() {}

	ngOnInit(): void {
		const enter$ = fromEvent(this.hoverDetectorRef.nativeElement, 'mouseenter').pipe(
			map(() => true)
		);
		const leave$ = fromEvent(this.hoverDetectorRef.nativeElement, 'mouseleave').pipe(
			map(() => false)
		);

		this.hover$ = merge(enter$, leave$);
	}
}
