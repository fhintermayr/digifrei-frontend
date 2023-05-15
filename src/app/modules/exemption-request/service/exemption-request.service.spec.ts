import { TestBed } from '@angular/core/testing';

import { ExemptionRequestService } from './exemption-request.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ExemptionRequestService', () => {
  let service: ExemptionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExemptionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
