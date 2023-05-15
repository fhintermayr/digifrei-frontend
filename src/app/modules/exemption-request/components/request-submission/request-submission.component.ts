import { Component } from '@angular/core';
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../../enum/exemption-category";

@Component({
  selector: 'app-request-submission',
  templateUrl: './request-submission.component.html',
  styleUrls: ['./request-submission.component.css']
})
export class RequestSubmissionComponent {

  readonly exemptionCategoryDropdownOptions: SelectOption[] = this.getExemptionCategoryDropdownOptions()

  private getExemptionCategoryDropdownOptions(): SelectOption[] {
    return Object.entries(ExemptionCategory)
      .map(([key, value]) => ({
        label: key,
        value: value
      }))
  }

}
