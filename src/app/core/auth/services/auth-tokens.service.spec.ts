import { TestBed } from '@angular/core/testing';
import { LOCAL_STORAGE } from '@common/providers/local-storage.provider';

import { AuthTokensService } from './auth-tokens.service';

const mockLocalStorage: Partial<Storage> = {
	getItem: jasmine.createSpy(),
	setItem: jasmine.createSpy(),
};

describe('AuthTokensService', () => {
	let service: AuthTokensService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [{ provide: LOCAL_STORAGE, useValue: mockLocalStorage }],
		});
		service = TestBed.inject(AuthTokensService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
