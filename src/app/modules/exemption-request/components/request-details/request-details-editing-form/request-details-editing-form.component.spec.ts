import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsEditingFormComponent } from './request-details-editing-form.component';

describe('RequestDetailsEditingFormComponent', () => {
  let component: RequestDetailsEditingFormComponent;
  let fixture: ComponentFixture<RequestDetailsEditingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDetailsEditingFormComponent]
    });
    fixture = TestBed.createComponent(RequestDetailsEditingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
