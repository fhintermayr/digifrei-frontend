import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestProcessingDescriptionListComponent} from './request-processing-description-list.component';
import {CardComponent} from "../../../../../shared/components/card/card.component";
import {CardHeaderComponent} from "../../../../../shared/components/card/card-header/card-header.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {CardBodyComponent} from "../../../../../shared/components/card/card-body/card-body.component";
import {ProcessingStatusBadgeComponent} from "../../processing-status-badge/processing-status-badge.component";
import {ProcessingStatus} from "../../../enum/processing-status";
import {Trainer} from "../../../../../shared/models/trainer";

describe('RequestProcessingDescriptionListComponent', () => {
  let component: RequestProcessingDescriptionListComponent;
  let fixture: ComponentFixture<RequestProcessingDescriptionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RequestProcessingDescriptionListComponent, CardComponent, CardHeaderComponent, SharedButtonComponent,
        CardBodyComponent, ProcessingStatusBadgeComponent
      ]
    });
    fixture = TestBed.createComponent(RequestProcessingDescriptionListComponent);
    component = fixture.componentInstance;
    component.requestProcessing = {processing_date: new Date(), processingStatus: ProcessingStatus.SUBMITTED, comment: "foo", processor: {} as Trainer, id: 1}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
