import { TestBed } from '@angular/core/testing';

import { RequestProcessingService } from './request-processing.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RequestProcessingService', () => {
  let service: RequestProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RequestProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
