import {Component, Input} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {ProcessingStatus} from "../../../enum/processing-status";

@Component({
  selector: 'app-exemption-requests-table',
  templateUrl: './exemption-requests-table.component.html',
  styleUrls: ['./exemption-requests-table.component.css']
})
export class ExemptionRequestsTableComponent {

  @Input()
  exemptionRequests: ExemptionRequest[] = []

  protected readonly ProcessingStatus = ProcessingStatus;
}
