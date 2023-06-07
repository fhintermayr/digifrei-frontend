import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerConfirmationModalComponent } from './danger-confirmation-modal.component';
import {DIALOG_DATA, DialogModule, DialogRef} from "@angular/cdk/dialog";

describe('DangerConfirmationModalComponent', () => {
  let component: DangerConfirmationModalComponent;
  let fixture: ComponentFixture<DangerConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangerConfirmationModalComponent],
      imports: [ DialogModule ],
      providers: [
        {provide: DialogRef, useValue: {}},
        {provide: DIALOG_DATA, useValue: {}}
      ]

    });
    fixture = TestBed.createComponent(DangerConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
