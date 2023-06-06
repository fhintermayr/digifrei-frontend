import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProcessingDescriptionListComponent } from './request-processing-description-list.component';

describe('RequestProcessingDescriptionListComponent', () => {
  let component: RequestProcessingDescriptionListComponent;
  let fixture: ComponentFixture<RequestProcessingDescriptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestProcessingDescriptionListComponent]
    });
    fixture = TestBed.createComponent(RequestProcessingDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
