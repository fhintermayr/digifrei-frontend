import { TestBed } from '@angular/core/testing';

import { SocioEduExpertService } from './socio-edu-expert.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SocioEduExpertService', () => {
  let service: SocioEduExpertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SocioEduExpertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
