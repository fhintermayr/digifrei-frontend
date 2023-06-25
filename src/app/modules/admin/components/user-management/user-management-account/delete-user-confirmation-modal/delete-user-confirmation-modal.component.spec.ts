import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserConfirmationModalComponent } from './delete-user-confirmation-modal.component';

describe('DeleteUserConfirmationModalComponent', () => {
  let component: DeleteUserConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteUserConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserConfirmationModalComponent]
    });
    fixture = TestBed.createComponent(DeleteUserConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
