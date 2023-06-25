import { Component } from '@angular/core';
import {ModalComponent} from "../../../../../../shared/components/modal/modal.component";

@Component({
  selector: 'app-delete-user-confirmation-modal',
  templateUrl: './delete-user-confirmation-modal.component.html',
  styleUrls: ['./delete-user-confirmation-modal.component.css']
})
export class DeleteUserConfirmationModalComponent extends ModalComponent { }
