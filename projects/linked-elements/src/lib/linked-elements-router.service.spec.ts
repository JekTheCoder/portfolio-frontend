import { TestBed } from '@angular/core/testing';

import { LinkedElementsRouterService } from './linked-elements-router.service';

describe('LinkedElementsRouterService', () => {
  let service: LinkedElementsRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkedElementsRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
