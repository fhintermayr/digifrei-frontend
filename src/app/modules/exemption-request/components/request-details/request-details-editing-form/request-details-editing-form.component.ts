import {Component, Input} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {FormBuilder, Validators} from "@angular/forms";
import {DateValidators} from "../../../validators/date-validators";

@Component({
  selector: 'app-request-details-editing-form',
  templateUrl: './request-details-editing-form.component.html',
  styleUrls: ['./request-details-editing-form.component.css']
})
export class RequestDetailsEditingFormComponent {

  @Input()
  exemptionRequest?: ExemptionRequest

  readonly exemptionRequestEditingForm = this.formBuilder.group({
    startTime: [null, [Validators.required, DateValidators.futureOrPresent()]],
    endTime: [null, [Validators.required, DateValidators.futureOrPresent(), DateValidators.isPast('startTime')]],
    exemptionCategory: [null, Validators.required],
    reason: [null, Validators.required],
  })


  constructor(private formBuilder: FormBuilder) { }

}
