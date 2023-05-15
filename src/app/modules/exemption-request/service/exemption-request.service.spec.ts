import { TestBed } from '@angular/core/testing';

import { ExemptionRequestService } from './exemption-request.service';

describe('ExemptionRequestService', () => {
  let service: ExemptionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemptionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
