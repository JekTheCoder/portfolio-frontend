import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubSrcComponent } from './github-src.component';

describe('GithubSrcComponent', () => {
	let component: GithubSrcComponent;
	let fixture: ComponentFixture<GithubSrcComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GithubSrcComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(GithubSrcComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
