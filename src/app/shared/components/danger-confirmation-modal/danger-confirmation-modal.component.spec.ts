import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerConfirmationModalComponent } from './danger-confirmation-modal.component';

describe('DangerConfirmationModalComponent', () => {
  let component: DangerConfirmationModalComponent;
  let fixture: ComponentFixture<DangerConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DangerConfirmationModalComponent]
    });
    fixture = TestBed.createComponent(DangerConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
