import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgLetDirective } from 'src/app/common/directives/ng-let.directive';
import { NavigatorComponent } from './navigator.component';

describe('NavigatorComponent', () => {
	let component: NavigatorComponent;
	let fixture: ComponentFixture<NavigatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavigatorComponent],
			imports: [RouterTestingModule, NgLetDirective],
		}).compileComponents();

		fixture = TestBed.createComponent(NavigatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
