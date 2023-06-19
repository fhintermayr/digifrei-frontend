import { Injectable } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ScrollStrategyOptions} from "@angular/cdk/overlay";
import {ModalContent} from "../components/danger-confirmation-modal/modal-content";
import {
  DangerConfirmationModalComponent
} from "../components/danger-confirmation-modal/danger-confirmation-modal.component";
import {
  NewRequestProcessingModalComponent
} from "../../modules/exemption-request/components/new-request-processing-modal/new-request-processing-modal.component";
import {
  CreateDepartmentModalComponent
} from "../../modules/admin/components/department/create-department-modal/create-department-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: Dialog,
    private scrollStrategyOptions: ScrollStrategyOptions
  ) { }

  public createDangerConfirmationModal(content: ModalContent) {
    const modalConfig = {
      scrollStrategy: this.scrollStrategyOptions.block(),
      data: content
    }
    return this.dialog.open(DangerConfirmationModalComponent, modalConfig)
  }

  public createNewRequestProcessingModal() {
    const modalConfig = { scrollStrategy: this.scrollStrategyOptions.block() }

    return this.dialog.open(NewRequestProcessingModalComponent, modalConfig)
  }

  public createNewDepartmentModal() {
    const modalConfig = { scrollStrategy: this.scrollStrategyOptions.block() }

    return this.dialog.open(CreateDepartmentModalComponent, modalConfig)
  }

}
