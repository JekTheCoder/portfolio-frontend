import { TestBed } from '@angular/core/testing';

import { ResizeObservableFactoryService } from './resize-observable-factory.service';

describe('ResizeObservableFactoryService', () => {
  let service: ResizeObservableFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResizeObservableFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
