import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProcessingDetailsComponent } from './request-processing-details.component';

describe('RequestProcessingDetailsComponent', () => {
  let component: RequestProcessingDetailsComponent;
  let fixture: ComponentFixture<RequestProcessingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestProcessingDetailsComponent]
    });
    fixture = TestBed.createComponent(RequestProcessingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
