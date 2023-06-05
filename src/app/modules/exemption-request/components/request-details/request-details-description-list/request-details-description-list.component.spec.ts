import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsDescriptionListComponent } from './request-details-description-list.component';

describe('RequestDetailsDescriptionListComponent', () => {
  let component: RequestDetailsDescriptionListComponent;
  let fixture: ComponentFixture<RequestDetailsDescriptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestDetailsDescriptionListComponent]
    });
    fixture = TestBed.createComponent(RequestDetailsDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
