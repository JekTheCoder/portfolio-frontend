import { TestBed } from '@angular/core/testing';

import { GithubAuthBuilderService } from './github-auth-builder.service';

describe('GithubAuthBuilderService', () => {
	let service: GithubAuthBuilderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GithubAuthBuilderService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
