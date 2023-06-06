import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingStatusBadgeComponent } from './processing-status-badge.component';

describe('ProcessingStatusBadgeComponent', () => {
  let component: ProcessingStatusBadgeComponent;
  let fixture: ComponentFixture<ProcessingStatusBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingStatusBadgeComponent]
    });
    fixture = TestBed.createComponent(ProcessingStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
