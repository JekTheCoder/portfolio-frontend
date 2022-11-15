import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { NgLetDirective } from './ng-let.directive';

@Component({
	selector: 'test-wrapper',
	template: `<p *ngLet="2 as val" targetElement>{{ val }}</p>`,
})
class NgLetWrapperComponent {}

describe('NgLetDirective', () => {
	let fixure: ComponentFixture<NgLetWrapperComponent>;
	let component: NgLetWrapperComponent;

	let element: DebugElement;
	let directive: NgLetDirective;

	beforeAll(() => {
		TestBed.resetTestEnvironment();
		TestBed.initTestEnvironment(
			BrowserDynamicTestingModule,
			platformBrowserDynamicTesting()
		);
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [NgLetWrapperComponent],
			imports: [NgLetDirective],
		});

		fixure = TestBed.createComponent(NgLetWrapperComponent);
		component = fixure.componentInstance;

		fixure.detectChanges();
		element = fixure.debugElement.query(By.css('[targetElement]'));
		directive = element.injector.get(NgLetDirective);
	});

	it('should create an instance', () => {
		expect(directive).toBeTruthy();
	});

	it('should set a template variable', () => {
		expect(element.context['ngLet']).toBe(2);
	});
});
