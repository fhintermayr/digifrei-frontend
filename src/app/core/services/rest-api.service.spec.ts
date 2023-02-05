import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RestApiService', () => {
  let service: RestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestApiService]
    });
    service = TestBed.inject(RestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
