import { TestBed } from '@angular/core/testing';

import { AccessRoleGuard } from './access-role.guard';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AccessRoleGuard', () => {
  let guard: AccessRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    guard = TestBed.inject(AccessRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
