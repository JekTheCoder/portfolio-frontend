import { TestBed } from '@angular/core/testing';

import { BlogCreateService } from './blog-create.service';

describe('BlogCreateService', () => {
  let service: BlogCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
