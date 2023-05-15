import { Component } from '@angular/core';
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../../enum/exemption-category";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-request-submission',
  templateUrl: './request-submission.component.html',
  styleUrls: ['./request-submission.component.css']
})
export class RequestSubmissionComponent {

  readonly exemptionCategoryDropdownOptions: SelectOption[] = this.getExemptionCategoryDropdownOptions()

  readonly submissionForm = this.formBuilder.group({
    startTime: [null, Validators.required],
    endTime: [null, Validators.required],
    reason: [null, Validators.required],
    exemptionCategory: [null, Validators.required],
    appointmentCancelled: [null, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  private getExemptionCategoryDropdownOptions(): SelectOption[] {
    return Object.entries(ExemptionCategory)
      .map(([key, value]) => ({
        label: key,
        value: value
      }))
  }

}
