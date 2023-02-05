import { TestBed } from '@angular/core/testing';

import { NavigationBarContentService } from './navigation-bar-content.service';

describe('NavigationBarContentService', () => {
  let service: NavigationBarContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationBarContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
