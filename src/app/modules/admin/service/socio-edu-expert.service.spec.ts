import { TestBed } from '@angular/core/testing';

import { SocioEduExpertService } from './socio-edu-expert.service';

describe('SocioEduExpertService', () => {
  let service: SocioEduExpertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocioEduExpertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
