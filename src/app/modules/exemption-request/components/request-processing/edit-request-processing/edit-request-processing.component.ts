import {Component, Input, OnInit} from '@angular/core';
import {RequestProcessing} from "../../../model/request-processing";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ProcessingStatusUtil} from "../../../util/processing-status-util";
import {FormBuilder, Validators} from "@angular/forms";
import {ProcessingStatus} from "../../../enum/processing-status";

@Component({
  selector: 'app-edit-request-processing',
  templateUrl: './edit-request-processing.component.html',
  styleUrls: ['./edit-request-processing.component.css']
})
export class EditRequestProcessingComponent implements OnInit {

  @Input()
  requestProcessing!: RequestProcessing
  processingStatusDropdownOptions: SelectOption[] = ProcessingStatusUtil.getStatusForNewProcessingAsDropdownOption()

  editProcessingStatusForm = this.formBuilder.group({
    processingStatus: [ProcessingStatus.DRAFT, Validators.required],
    comment: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setDefaultOptionsOfEditingForm()
  }

  setDefaultOptionsOfEditingForm() {
    this.editProcessingStatusForm.controls.processingStatus.setValue(this.requestProcessing.processingStatus)
    this.editProcessingStatusForm.controls.comment.setValue(this.requestProcessing.comment)
  }
}
