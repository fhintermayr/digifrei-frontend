import {Component, Input} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";

@Component({
  selector: 'app-exemption-requests-table',
  templateUrl: './exemption-requests-table.component.html',
  styleUrls: ['./exemption-requests-table.component.css']
})
export class ExemptionRequestsTableComponent {

  @Input()
  exemptionRequests?: ExemptionRequest[]

}
