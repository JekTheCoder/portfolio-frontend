import { TestBed } from '@angular/core/testing';
import { BODY } from '../providers/body.provider';
import { LOCAL_STORAGE } from '../providers/local-storage.provider';

import { DarkModeService } from './dark-mode.service';

const mockBODY = document.createElement('div');
const mockLocalStorage: Partial<Storage> = {
  getItem: jasmine.createSpy(),
  setItem: jasmine.createSpy()
};

describe('DarkmodeService', () => {
  let service: DarkModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BODY, useValue: mockBODY },
        { provide: LOCAL_STORAGE, useValue: mockLocalStorage },
      ],
    });
    service = TestBed.inject(DarkModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
