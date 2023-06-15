import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProcessingStatusBadgeComponent} from './processing-status-badge.component';
import {FormatProcessingStatusPipe} from "../../pipes/format-processing-status.pipe";
import {ProcessingStatus} from "../../enum/processing-status";

describe('ProcessingStatusBadgeComponent', () => {
  let component: ProcessingStatusBadgeComponent;
  let fixture: ComponentFixture<ProcessingStatusBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingStatusBadgeComponent, FormatProcessingStatusPipe]
    });
    fixture = TestBed.createComponent(ProcessingStatusBadgeComponent);
    component = fixture.componentInstance;
    component.processingStatus = ProcessingStatus.CONFIRMATION_MISSING
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
