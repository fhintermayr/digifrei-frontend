import {Component, Input, ViewChild} from '@angular/core';
import {EditRequestProcessingComponent} from "../edit-request-processing/edit-request-processing.component";
import {RequestProcessingUpdateDto} from "../../../dto/request-processing-update-dto";
import {RequestProcessingService} from "../../../service/request-processing.service";
import {ExemptionRequest} from "../../../model/exemption-request";
import {NotificationService} from "../../../../../core/services/notification.service";

@Component({
  selector: 'app-request-processing-details',
  templateUrl: './request-processing-details.component.html',
  styleUrls: ['./request-processing-details.component.css']
})
export class RequestProcessingDetailsComponent {

  @Input()
  exemptionRequest!: ExemptionRequest

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

    this.requestProcessingService.updateExemptionRequestProcessing(this.exemptionRequest.id, requestProcessingUpdateDto).subscribe({
      next: updatedExemptionRequest => {
        this.exemptionRequest = updatedExemptionRequest
        this.toggleEditingState()
        this.notificationService.showSuccess("Die Bearbeitungsdetails wurden aktualisiert")
      },
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Versuche es später erneut")
    })
  }

  toggleEditingState() {
    this.isCurrentlyEditing = !this.isCurrentlyEditing
  }

}
