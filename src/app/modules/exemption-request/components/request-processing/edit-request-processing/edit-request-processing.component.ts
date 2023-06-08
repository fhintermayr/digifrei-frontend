import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestProcessing} from "../../../model/request-processing";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ProcessingStatusUtil} from "../../../util/processing-status-util";
import {FormBuilder, Validators} from "@angular/forms";
import {ProcessingStatus} from "../../../enum/processing-status";
import {RequestProcessingService} from "../../../service/request-processing.service";
import {NotificationService} from "../../../../../core/services/notification.service";
import {ModalContent} from "../../../../../shared/components/danger-confirmation-modal/modal-content";
import {lastValueFrom} from "rxjs";
import {ModalResponse} from "../../../../../shared/enum/modal-response";
import {ModalService} from "../../../../../shared/service/modal.service";

@Component({
  selector: 'app-edit-request-processing',
  templateUrl: './edit-request-processing.component.html',
  styleUrls: ['./edit-request-processing.component.css']
})
export class EditRequestProcessingComponent implements OnInit {

  @Input()
  requestProcessing!: RequestProcessing
  @Output()
  withdrawal: EventEmitter<void> = new EventEmitter<void>()

  processingStatusDropdownOptions: SelectOption[] = ProcessingStatusUtil.getStatusForNewProcessingAsDropdownOption()

  public editProcessingStatusForm = this.formBuilder.group({
    processingStatus: [ProcessingStatus.DRAFT, Validators.required],
    comment: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private requestProcessingService: RequestProcessingService,
    private notificationService: NotificationService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.setDefaultOptionsOfEditingForm()
  }

  setDefaultOptionsOfEditingForm() {
    this.editProcessingStatusForm.controls.processingStatus.setValue(this.requestProcessing.processingStatus)
    this.editProcessingStatusForm.controls.comment.setValue(this.requestProcessing.comment)
  }

  async openWithdrawalConfirmationModal() {
    const modalContent: ModalContent = {
      title: "Antragsbearbeitung zurückziehen?",
      content: "Bist du sicher, dass du die Antragsbearbeitung zurückziehen möchtest? Dieser Schritt kann nicht rückgängig gemacht werden."
    }

    const modalRef = this.modalService.createDangerConfirmationModal(modalContent)
    const modalResponse = await lastValueFrom(modalRef.closed)

    if (modalResponse === ModalResponse.Confirm) this.withdrawRequestProcessing()
  }

  private withdrawRequestProcessing() {

    this.requestProcessingService.withdrawRequestProcessing(this.requestProcessing.id).subscribe({
      next: () => {
        this.withdrawal.emit()
        this.notificationService.showSuccess("Die Antragsbearbeitung wurde zurückgezogen")
      },
      error: () => this.notificationService.showSuccess("Etwas ist schiefgelaufen. Versuche es später erneut")
    })

  }

}
