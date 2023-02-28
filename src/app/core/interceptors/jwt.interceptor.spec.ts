import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt.interceptor';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";

describe('JwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ JwtInterceptor ],
    imports: [ HttpClientTestingModule, ToastrModule.forRoot() ]
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
