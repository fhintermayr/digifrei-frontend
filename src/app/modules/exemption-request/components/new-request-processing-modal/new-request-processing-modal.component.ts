import {Component} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ProcessingStatusUtil} from "../../util/processing-status-util";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestProcessingUpdateDto} from "../../dto/request-processing-update-dto";

@Component({
  selector: 'app-new-request-processing-modal',
  templateUrl: './new-request-processing-modal.component.html',
  styleUrls: ['./new-request-processing-modal.component.css']
})
export class NewRequestProcessingModalComponent {

  readonly processingStatusDropdownOptions: SelectOption[] = ProcessingStatusUtil.getStatusForNewProcessingAsDropdownOption()
  readonly requestProcessingForm = this.formBuilder.group({
    processingStatus: [null, Validators.required],
    comment: [null]
  })

  constructor(
    public dialogRef: DialogRef<string>,
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {
    const requestProcessingUpdateDto: RequestProcessingUpdateDto = Object.assign(new RequestProcessingUpdateDto(), this.requestProcessingForm.value)

    // Needs to be converter to string first, because the dialog.close method can only return string values
    const dtoAsString = JSON.stringify(requestProcessingUpdateDto)

    this.dialogRef.close(dtoAsString)
  }

}
