import { TestBed } from '@angular/core/testing';

import { RequestProcessingService } from './request-processing.service';

describe('RequestProcessingService', () => {
  let service: RequestProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
