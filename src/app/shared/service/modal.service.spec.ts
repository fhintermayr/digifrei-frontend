import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import {DialogModule} from "@angular/cdk/dialog";

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ DialogModule ]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
