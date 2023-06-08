import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExemptionRequest} from "../../model/exemption-request";
import {lastValueFrom, Observable, of} from "rxjs";
import {ExemptionRequestService} from "../../service/exemption-request.service";
import {
  RequestDetailsEditingFormComponent
} from "./request-details-editing-form/request-details-editing-form.component";
import {NotificationService} from "../../../../core/services/notification.service";
import {ModalService} from "../../../../shared/service/modal.service";
import {RequestProcessingUpdateDto} from "../../dto/request-processing-update-dto";
import {RequestProcessingService} from "../../service/request-processing.service";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  @ViewChild(RequestDetailsEditingFormComponent)
  private editingFormComponent!: RequestDetailsEditingFormComponent
  private exemptionRequestId!: number

  exemptionRequest$!: Observable<ExemptionRequest>
  isCurrentlyEditing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private exemptionRequestService: ExemptionRequestService,
    private requestProcessingService: RequestProcessingService,
    private notificationService: NotificationService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.exemptionRequestId = this.getIdFromRoute()
    this.exemptionRequest$ = this.exemptionRequestService.getExemptionRequestById(this.exemptionRequestId)
  }

  private getIdFromRoute(): number {

    const routeId = this.route.snapshot.paramMap.get('id')

    return parseInt(<string>routeId)
  }

  attemptExemptionRequestUpdate() {

    const editingForm = this.editingFormComponent.exemptionRequestEditingForm

    if (editingForm.invalid) {
      editingForm.markAllAsTouched()
      this.notificationService.showError("Bitte überprüfe deine Eingaben erneut.", "Speichern fehlgeschlagen!")
      return
    }

    this.performExemptionRequestUpdate();
  }

  private performExemptionRequestUpdate() {

    const updatedExemptionRequest: ExemptionRequest = Object.assign(new ExemptionRequest(), this.editingFormComponent.exemptionRequestEditingForm.value)

    this.exemptionRequestService.updateExemptionRequestById(this.exemptionRequestId, updatedExemptionRequest).subscribe({
      next: value => {
        this.toggleEditingState()
        this.notificationService.showSuccess("Der Antrag wurde aktualisiert")
        this.exemptionRequest$ = of(value)
      },
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Versuche es erneut oder wende dich an den Support")
    })

  }

  async openNewProcessingModal() {
    const modalRef = this.modalService.createNewRequestProcessingModal()
    const modalResponse = await lastValueFrom(modalRef.closed)

    const responseContainsRequestProcessing = modalResponse && typeof modalResponse === "string"

    if (responseContainsRequestProcessing) {
      const requestProcessingUpdateDto = JSON.parse(modalResponse)
      this.processExemptionRequest(requestProcessingUpdateDto)
    }
  }

  private processExemptionRequest(requestProcessingUpdateDto: RequestProcessingUpdateDto) {

    this.requestProcessingService.processExemptionRequest(this.exemptionRequestId, requestProcessingUpdateDto).subscribe({
      next: processedExemptionRequest => {
        this.exemptionRequest$ = of(processedExemptionRequest)
        this.notificationService.showSuccess("Antragsbearbeitung gespeichert")
      },
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Versuche es erneut oder wende dich an den Support")
    })

  }

  onRequestProcessingWithdrawal() {
    this.exemptionRequest$ = this.exemptionRequestService.getExemptionRequestById(this.exemptionRequestId)
  }

  toggleEditingState() {
    this.isCurrentlyEditing = !this.isCurrentlyEditing
  }

}
