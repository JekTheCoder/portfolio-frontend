import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RustProjectsComponent } from './rust-projects.component';

describe('RustProjectsComponent', () => {
	let component: RustProjectsComponent;
	let fixture: ComponentFixture<RustProjectsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RustProjectsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RustProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
