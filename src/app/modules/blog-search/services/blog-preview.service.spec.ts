import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { BlogPreviewService } from './blog-preview.service';

describe('BlogPreviewService', () => {
  let service: BlogPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BlogPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
