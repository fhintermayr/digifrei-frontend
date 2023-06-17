import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestProcessingComponent } from './edit-request-processing.component';
import {SharedDropdownComponent} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {SharedInputComponent} from "../../../../../shared/components/shared-input/shared-input.component";
import {SharedButtonComponent} from "../../../../../shared/components/shared-button/shared-button.component";
import {ProcessingStatus} from "../../../enum/processing-status";
import {Trainer} from "../../../../../shared/models/trainer";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrModule} from "ngx-toastr";
import {DialogModule} from "@angular/cdk/dialog";

describe('EditRequestProcessingComponent', () => {
  let component: EditRequestProcessingComponent;
  let fixture: ComponentFixture<EditRequestProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRequestProcessingComponent, SharedDropdownComponent, SharedInputComponent, SharedButtonComponent],
      imports: [ ReactiveFormsModule, HttpClientTestingModule, ToastrModule.forRoot(), DialogModule ]
    });
    fixture = TestBed.createComponent(EditRequestProcessingComponent);
    component = fixture.componentInstance;
    component.requestProcessing = {processingDate: new Date(), processingStatus: ProcessingStatus.SUBMITTED, comment: "foo", processor: {} as Trainer, id: 1}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
