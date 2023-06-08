import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestProcessingModalComponent } from './new-request-processing-modal.component';

describe('NewRequestProcessingModalComponent', () => {
  let component: NewRequestProcessingModalComponent;
  let fixture: ComponentFixture<NewRequestProcessingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRequestProcessingModalComponent]
    });
    fixture = TestBed.createComponent(NewRequestProcessingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
