import { Component } from '@angular/core';
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../../enum/exemption-category";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestSubmissionDto} from "../../dto/request-submission-dto";
import {AuthService} from "../../../authentication/service/auth.service";
import {lastValueFrom} from "rxjs";
import {User} from "../../../../shared/models/user";
import {ExemptionRequestService} from "../../service/exemption-request.service";
import {NotificationService} from "../../../../core/services/notification.service";
import {DateValidators} from "../../validators/date-validators";

@Component({
  selector: 'app-request-submission',
  templateUrl: './request-submission.component.html',
  styleUrls: ['./request-submission.component.css']
})
export class RequestSubmissionComponent {

  readonly exemptionCategoryDropdownOptions: SelectOption[] = this.getExemptionCategoryDropdownOptions()

  readonly submissionForm = this.formBuilder.group({
    startTime: [null, [Validators.required, DateValidators.futureOrPresent()]],
    endTime: [null, [Validators.required, DateValidators.futureOrPresent(), DateValidators.isPast('startTime')]],
    reason: [null, Validators.required],
    exemptionCategory: [null, Validators.required],
    appointmentCancelled: [null, Validators.required]
  })

  constructor(
    private authService: AuthService,
    private exemptionRequestService: ExemptionRequestService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) { }

  async onSubmit() {
    const requestSubmission: RequestSubmissionDto = await this.buildRequestSubmissionFromSubmissionForm()

    this.exemptionRequestService.submitExemptionRequest(requestSubmission).subscribe({
      next: () => this.notificationService.showSuccess(`Deine Dienstbefreiung wurde eingereicht`),
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Versuche es später erneut")
    })
  }

  private async buildRequestSubmissionFromSubmissionForm(): Promise<RequestSubmissionDto> {

    const submissionFormValues = this.submissionForm.value
    const requestSubmission: RequestSubmissionDto = Object.assign(new RequestSubmissionDto(), submissionFormValues)

    const currentUser$ = this.authService.getCurrentUser()
    const currentUser: User = await lastValueFrom(currentUser$)

    requestSubmission.applicantId = currentUser.id

    return requestSubmission
  }

  private getExemptionCategoryDropdownOptions(): SelectOption[] {
    return Object.entries(ExemptionCategory)
      .map(([key, value]) => ({
        label: key,
        value: value
      }))
  }

}
