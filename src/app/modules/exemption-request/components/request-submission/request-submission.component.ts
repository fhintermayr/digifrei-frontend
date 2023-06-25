import { Component } from '@angular/core';
import {SelectOption} from "../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestSubmissionDto} from "../../dto/request-submission-dto";
import {AuthService} from "../../../authentication/service/auth.service";
import {first, lastValueFrom} from "rxjs";
import {User} from "../../../../shared/models/user";
import {ExemptionRequestService} from "../../service/exemption-request.service";
import {NotificationService} from "../../../../core/services/notification.service";
import {DateValidators} from "../../validators/date-validators";
import {ExemptionCategoryUtil} from "../../util/exemption-category-util";

@Component({
  selector: 'app-request-submission',
  templateUrl: './request-submission.component.html',
  styleUrls: ['./request-submission.component.css']
})
export class RequestSubmissionComponent {

  readonly exemptionCategoryDropdownOptions: SelectOption[] = ExemptionCategoryUtil.getCategoriesAsDropdownOption()

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


  async onSubmit(): Promise<void> {

    const requestSubmission: RequestSubmissionDto = await this.getRequestSubmissionFromSubmissionForm();

    this.exemptionRequestService.submitExemptionRequest(requestSubmission).pipe(first()).subscribe({
      next: () => {
        this.notificationService.showSuccess('Deine Dienstbefreiung wurde eingereicht')
        this.submissionForm.reset()
      },
      error: () => {
        this.notificationService.showError('Etwas ist schiefgelaufen. Versuche es später erneut')
      }
    })
  }

  private async getRequestSubmissionFromSubmissionForm(): Promise<RequestSubmissionDto> {

    const currentUser: User = await lastValueFrom(this.authService.getCurrentUser())
    const requestSubmission: RequestSubmissionDto = this.submissionForm.value as unknown as RequestSubmissionDto

    requestSubmission.applicantId = currentUser.id;

    return requestSubmission;
  }

}
