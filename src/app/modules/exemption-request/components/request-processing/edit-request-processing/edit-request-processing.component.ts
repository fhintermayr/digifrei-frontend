import {Component, Input, OnInit} from '@angular/core';
import {RequestProcessing} from "../../../model/request-processing";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ProcessingStatusUtil} from "../../../util/processing-status-util";
import {FormBuilder, Validators} from "@angular/forms";
import {ProcessingStatus} from "../../../enum/processing-status";
import {RequestProcessingService} from "../../../service/request-processing.service";
import {NotificationService} from "../../../../../core/services/notification.service";

@Component({
  selector: 'app-edit-request-processing',
  templateUrl: './edit-request-processing.component.html',
  styleUrls: ['./edit-request-processing.component.css']
})
export class EditRequestProcessingComponent implements OnInit {

  @Input()
  requestProcessing!: RequestProcessing
  processingStatusDropdownOptions: SelectOption[] = ProcessingStatusUtil.getStatusForNewProcessingAsDropdownOption()

  public editProcessingStatusForm = this.formBuilder.group({
    processingStatus: [ProcessingStatus.DRAFT, Validators.required],
    comment: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private requestProcessingService: RequestProcessingService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.setDefaultOptionsOfEditingForm()
  }

  setDefaultOptionsOfEditingForm() {
    this.editProcessingStatusForm.controls.processingStatus.setValue(this.requestProcessing.processingStatus)
    this.editProcessingStatusForm.controls.comment.setValue(this.requestProcessing.comment)
  }

  withdrawRequestProcessing() {

    this.requestProcessingService.withdrawRequestProcessing(this.requestProcessing.id).subscribe({
      next: () => {
        this.withdrawal.emit()
        this.notificationService.showSuccess("Die Antragsbearbeitung wurde zurückgezogen")
      },
      error: () => this.notificationService.showSuccess("Etwas ist schiefgelaufen. Versuche es später erneut")
    })

  }

}
