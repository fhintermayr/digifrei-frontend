import { Component } from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {animate, style, transition, trigger} from "@angular/animations";
import {ModalResponse} from "../../enum/modal-response";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('backdropAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ModalComponent {

  constructor(protected dialogRef: DialogRef<string>) {}

  protected closeModalWithConfirmation() {
    this.dialogRef.close(ModalResponse.Confirm)
  }

  protected closeModal() {
    this.dialogRef.close()
  }

}
