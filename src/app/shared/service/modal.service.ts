import { Injectable } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ScrollStrategyOptions} from "@angular/cdk/overlay";
import {ModalContent} from "../components/danger-confirmation-modal/modal-content";
import {
  DangerConfirmationModalComponent
} from "../components/danger-confirmation-modal/danger-confirmation-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private confirmationModal: Dialog,
    private scrollStrategyOptions: ScrollStrategyOptions
  ) { }

  public createDangerConfirmationModal(content: ModalContent) {
    const modalConfig = {
      scrollStrategy: this.scrollStrategyOptions.block(),
      data: content
    }
    return this.confirmationModal.open(DangerConfirmationModalComponent, modalConfig)
  }

}
