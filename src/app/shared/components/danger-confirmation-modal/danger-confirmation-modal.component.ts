import {Component, Inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {ModalContent} from "./modal-content";
import {ModalResponse} from "../../enum/modal-response";

@Component({
  selector: 'app-danger-confirmation-modal',
  templateUrl: './danger-confirmation-modal.component.html',
  styleUrls: ['./danger-confirmation-modal.component.css']
})
export class DangerConfirmationModalComponent {

  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: ModalContent) { }

  protected readonly ModalResponse = ModalResponse;
}
