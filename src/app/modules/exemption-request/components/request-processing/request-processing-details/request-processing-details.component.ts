import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {EditRequestProcessingComponent} from "../edit-request-processing/edit-request-processing.component";
import {RequestProcessingUpdateDto} from "../../../dto/request-processing-update-dto";
import {RequestProcessingService} from "../../../service/request-processing.service";
import {NotificationService} from "../../../../../core/services/notification.service";
import {RequestProcessing} from "../../../model/request-processing";
import {AccessRole} from "../../../../../shared/enum/access-role";

@Component({
  selector: 'app-request-processing-details',
  templateUrl: './request-processing-details.component.html',
  styleUrls: ['./request-processing-details.component.css']
})
export class RequestProcessingDetailsComponent {

  @Input()
  requestProcessing!: RequestProcessing

  @Output()
  requestProcessingWithdrawal: EventEmitter<void> = new EventEmitter<void>()

  @ViewChild(EditRequestProcessingComponent)
  editRequestProcessingComponent!: EditRequestProcessingComponent

  isCurrentlyEditing: boolean = false


  constructor(
    private requestProcessingService: RequestProcessingService,
    private notificationService: NotificationService
  ) { }

  onSaveRequestProcessing() {
    const editingFormValues = this.editRequestProcessingComponent.editProcessingStatusForm.value
    const requestProcessingUpdateDto: RequestProcessingUpdateDto = Object.assign(new RequestProcessingUpdateDto(), editingFormValues)

    this.requestProcessingService.updateExemptionRequestProcessing(this.requestProcessing.id, requestProcessingUpdateDto).subscribe({
      next: updatedExemptionRequest => {
        this.requestProcessing = updatedExemptionRequest.requestProcessing
        this.toggleEditingState()
        this.notificationService.showSuccess("Die Bearbeitungsdetails wurden aktualisiert")
      },
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Versuche es später erneut")
    })
  }

  onWithdrawal() {
    this.requestProcessingWithdrawal.emit()
  }

  toggleEditingState() {
    this.isCurrentlyEditing = !this.isCurrentlyEditing
  }

  protected readonly AccessRole = AccessRole;
}
