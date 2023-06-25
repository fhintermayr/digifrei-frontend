import {Component, Input} from '@angular/core';
import {RestApiService} from "../../../../../../core/services/rest-api.service";
import {NotificationService} from "../../../../../../core/services/notification.service";
import {Router} from "@angular/router";
import {
  DeleteUserConfirmationModalComponent
} from "../delete-user-confirmation-modal/delete-user-confirmation-modal.component";
import {lastValueFrom} from "rxjs";
import {ModalResponse} from "../../../../../../shared/enum/modal-response";
import {ModalService} from "../../../../../../shared/service/modal.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  @Input()
  userId?: number

  constructor(
    private restApiService: RestApiService,
    private notificationService: NotificationService,
    private router: Router,
    private modalService: ModalService
  ) { }


  async openConfirmDeletionModal() {
    const modalRef = this.modalService.openModal(DeleteUserConfirmationModalComponent)
    const modalResponse = await lastValueFrom(modalRef.closed)

    if (modalResponse === ModalResponse.Confirm) this.deleteUser()

  }

  deleteUser() {
    this.restApiService.deleteUserById(this.userId!).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Der Benutzer wurde erfolgreich gelöscht`)
        this.router.navigate(["/admin"])
      },
      error: () => {
        this.notificationService.showError("Der Benutzer konnte nicht gelöscht werden")
      }
    })
  }
}
