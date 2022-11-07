import { TestBed } from '@angular/core/testing';

import { BoxSizeService } from './box-size.service';

describe('BoxSizeService', () => {
  let service: BoxSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
