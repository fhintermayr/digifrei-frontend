import {Component} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-new-request-processing-modal',
  templateUrl: './new-request-processing-modal.component.html',
  styleUrls: ['./new-request-processing-modal.component.css']
})
export class NewRequestProcessingModalComponent {

  constructor(public dialogRef: DialogRef<string>) { }

}
