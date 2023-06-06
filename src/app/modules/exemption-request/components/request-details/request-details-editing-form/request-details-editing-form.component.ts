import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {FormBuilder, Validators} from "@angular/forms";
import {DateValidators} from "../../../validators/date-validators";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../../../enum/exemption-category";

@Component({
  selector: 'app-request-details-editing-form',
  templateUrl: './request-details-editing-form.component.html',
  styleUrls: ['./request-details-editing-form.component.css']
})
export class RequestDetailsEditingFormComponent implements OnChanges {

  @Input()
  exemptionRequest?: ExemptionRequest

  readonly exemptionCategoryDropdownOptions: SelectOption[] = this.getExemptionCategoryDropdownOptions()

  public readonly exemptionRequestEditingForm = this.formBuilder.group({
    startTime: [null, [Validators.required, DateValidators.futureOrPresent()]],
    endTime: [null, [Validators.required, DateValidators.futureOrPresent(), DateValidators.isPast('startTime')]],
    exemptionCategory: [this.exemptionRequest?.exemptionCategory, Validators.required],
    reason: [this.exemptionRequest?.reason, Validators.required],
  })


  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.exemptionRequest) this.setDefaultValuesOfForm()

  }

  private setDefaultValuesOfForm() {

    this.exemptionRequestEditingForm.controls.exemptionCategory.setValue(this.exemptionRequest?.exemptionCategory)
    this.exemptionRequestEditingForm.controls.reason.setValue(this.exemptionRequest?.reason)
  }

  // TODO: In Enum Datei auslagern?
  private getExemptionCategoryDropdownOptions(): SelectOption[] {
    return Object.entries(ExemptionCategory)
      .map(([key, value]) => ({
        label: key,
        value: value
      }))
  }

}
