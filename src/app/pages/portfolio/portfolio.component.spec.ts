import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioComponent } from './portfolio.component';

function isInViewport(element: HTMLElement) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

@Component({
	selector: 'app-navigator',
	template: '',
})
class MockNavigatorComponent {
	@Input() fragments: any;
}

describe('PortfolioComponent', () => {
	let component: PortfolioComponent;
	let fixture: ComponentFixture<PortfolioComponent>;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PortfolioComponent, MockNavigatorComponent],
			imports: [RouterTestingModule],
		}).compileComponents();

		router = TestBed.inject(Router);
		fixture = TestBed.createComponent(PortfolioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should scroll the view to the required fragment', async () => {
		Object.values(component['sections']).forEach(
			element => (element.style.height = '100vh')
		);

		await router.navigate(['/'], { fragment: 'about-me' });
		expect(isInViewport(component.aboutMe.nativeElement)).toBe(true);
		expect(isInViewport(component.contactMe.nativeElement)).toBe(false);
	});
});
