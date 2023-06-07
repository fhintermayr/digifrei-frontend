import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {FormBuilder, Validators} from "@angular/forms";
import {DateValidators} from "../../../validators/date-validators";
import {SelectOption} from "../../../../../shared/components/shared-dropdown/shared-dropdown.component";
import {ExemptionCategory} from "../../../enum/exemption-category";
import {DatePipe} from "@angular/common";
import {ModalContent} from "../../../../../shared/components/danger-confirmation-modal/modal-content";
import {ModalService} from "../../../../../shared/service/modal.service";
import {ModalResponse} from "../../../../../shared/enum/modal-response";
import {ExemptionRequestService} from "../../../service/exemption-request.service";
import {NotificationService} from "../../../../../core/services/notification.service";
import {Router} from "@angular/router";

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
    private router: Router,
    private datePipe: DatePipe,
    private modalService: ModalService,
    private exemptionRequestService: ExemptionRequestService,
    private notificationService: NotificationService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.exemptionRequest) this.setDefaultValuesOfForm()

  }

  // FIXME: Maybe just initialize form with default values when exemptionRequest is set?
  private setDefaultValuesOfForm() {
    this.exemptionRequestEditingForm.controls.startTime.setValue(this.datePipe.transform(this.exemptionRequest?.startTime, 'yyyy-MM-ddTHH:mm'))
    this.exemptionRequestEditingForm.controls.endTime.setValue(this.datePipe.transform(this.exemptionRequest?.endTime, 'yyyy-MM-ddTHH:mm'))
    this.exemptionRequestEditingForm.controls.exemptionCategory.setValue(this.exemptionRequest?.exemptionCategory)
    this.exemptionRequestEditingForm.controls.reason.setValue(this.exemptionRequest?.reason)
  }

  openDeleteExemptionRequestModal() {

    const modalContent: ModalContent = {
      title: "Dienstbefreiung löschen?",
      content: "Bist du sicher, dass du die Dienstbefreiung löschen möchtest? Dieser Schritt kann nicht rückgängig gemacht werden."
    }

    const modalRef = this.modalService.createDangerConfirmationModal(modalContent)

    modalRef.closed.subscribe({
      next: response => {
        if (response === ModalResponse.Confirm) this.deleteExemptionRequest()
      }
    })
  }

  deleteExemptionRequest() {

    this.exemptionRequestService.deleteExemptionRequestById(<number>this.exemptionRequest?.id).subscribe({
      next: () => {
        this.router.navigate(['/exemption-request'])
        this.notificationService.showSuccess("Der Dienstbefreiungsantrag wurde gelöscht")
      },
      error: () => this.notificationService.showSuccess("Der Antrag konnte nicht gelöscht werden. Versuche es später erneut")
    })
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
