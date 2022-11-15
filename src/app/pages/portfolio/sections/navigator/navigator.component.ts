import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, debounceTime, map, Subject, takeUntil, tap } from 'rxjs';
import { ResizeObservableFactoryService } from '../../services/resize-observable-factory.service';

@Component({
	selector: 'app-navigator',
	templateUrl: './navigator.component.html',
	styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit, OnDestroy {
	@Input() fragments: string[] = [];
	private nativeElement: HTMLElement | null;

	protected showPointName$ = new BehaviorSubject<boolean>(false);
	protected activeFragment$ = this.route.fragment;

	private unsuscriber$ = new Subject<void>();

	constructor(
		{ nativeElement }: ElementRef,
		private resizeFactory: ResizeObservableFactoryService,
		private changeDec: ChangeDetectorRef,
		private route: ActivatedRoute
	) {
		this.nativeElement = nativeElement;
	}

	ngOnInit(): void {
		if (!this.nativeElement) return;
		const obs$ = this.resizeFactory.createReizeObservable(this.nativeElement).pipe(
			takeUntil(this.unsuscriber$),
			debounceTime(100),
			map(e => e[0].contentRect.width),
			map(width => width > 150)
		);
		obs$.pipe(tap(this.showPointName$)).subscribe(() =>
			this.changeDec.detectChanges()
		);
	}

	ngOnDestroy(): void {
		this.unsuscriber$.next();
		this.unsuscriber$.complete();
	}
}
