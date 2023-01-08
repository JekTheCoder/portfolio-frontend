import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShadowHoverComponent } from './shadow-hover.component';

describe('ShadowHoverComponent', () => {
	let component: ShadowHoverComponent;
	let fixture: ComponentFixture<ShadowHoverComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShadowHoverComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ShadowHoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
