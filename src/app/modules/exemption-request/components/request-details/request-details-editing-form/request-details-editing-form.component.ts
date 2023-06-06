import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {FormBuilder, Validators} from "@angular/forms";
import {DateValidators} from "../../../validators/date-validators";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../../../enum/exemption-category";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-request-details-editing-form',
  templateUrl: './request-details-editing-form.component.html',
  styleUrls: ['./request-details-editing-form.component.css'],
  providers: [ DatePipe ]
})
export class RequestDetailsEditingFormComponent implements OnChanges {

  @Input()
  exemptionRequest?: ExemptionRequest

  readonly exemptionCategoryDropdownOptions: SelectOption[] = this.getExemptionCategoryDropdownOptions()

  public readonly exemptionRequestEditingForm = this.formBuilder.group({
    startTime: [new Date().toISOString().slice(0, 16), [Validators.required, DateValidators.futureOrPresent()]],
    endTime: [new Date().toISOString().slice(0, 16), [Validators.required, DateValidators.futureOrPresent(), DateValidators.isPast('startTime')]],
    exemptionCategory: [this.exemptionRequest?.exemptionCategory, Validators.required],
    reason: [this.exemptionRequest?.reason, Validators.required],
  })


  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.exemptionRequest) this.setDefaultValuesOfForm()

  }

  private setDefaultValuesOfForm() {
    this.exemptionRequestEditingForm.controls.startTime.setValue(this.datePipe.transform(this.exemptionRequest?.startTime, 'yyyy-MM-ddTHH:mm'))
    this.exemptionRequestEditingForm.controls.endTime.setValue(this.datePipe.transform(this.exemptionRequest?.endTime, 'yyyy-MM-ddTHH:mm'))
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
