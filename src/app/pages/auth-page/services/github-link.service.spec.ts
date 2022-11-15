import { TestBed } from '@angular/core/testing';

import { GithubLinkService } from './github-link.service';

describe('GithubLinkService', () => {
	let service: GithubLinkService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GithubLinkService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
