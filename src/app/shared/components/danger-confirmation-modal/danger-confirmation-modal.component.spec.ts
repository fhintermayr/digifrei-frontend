import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerConfirmationModalComponent } from './danger-confirmation-modal.component';
import {DIALOG_DATA, DialogModule, DialogRef} from "@angular/cdk/dialog";
import {ModalComponent} from "../modal/modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('DangerConfirmationModalComponent', () => {
  let component: DangerConfirmationModalComponent;
  let fixture: ComponentFixture<DangerConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangerConfirmationModalComponent, ModalComponent],
      imports: [ BrowserAnimationsModule, DialogModule ],
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
