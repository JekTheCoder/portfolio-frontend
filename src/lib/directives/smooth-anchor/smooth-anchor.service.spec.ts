import { TestBed } from '@angular/core/testing';

import { SmoothAnchorService } from './smooth-anchor.service';

describe('SmoothAnchorService', () => {
  let service: SmoothAnchorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmoothAnchorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
