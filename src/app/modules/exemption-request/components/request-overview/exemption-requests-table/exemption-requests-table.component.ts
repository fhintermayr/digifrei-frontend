import {Component, Input} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {ProcessingStatus} from "../../../enum/processing-status";
import {Page} from "../../../../../shared/models/page";

@Component({
  selector: 'app-exemption-requests-table',
  templateUrl: './exemption-requests-table.component.html',
  styleUrls: ['./exemption-requests-table.component.css']
})
export class ExemptionRequestsTableComponent {

  @Input()
  exemptionRequests?: Page<ExemptionRequest>

  protected readonly ProcessingStatus = ProcessingStatus;
}
