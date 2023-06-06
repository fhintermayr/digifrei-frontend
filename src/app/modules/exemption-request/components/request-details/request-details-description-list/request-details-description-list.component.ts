import {Component, Input} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";

@Component({
  selector: 'app-request-details-description-list',
  templateUrl: './request-details-description-list.component.html',
  styleUrls: ['./request-details-description-list.component.css']
})
export class RequestDetailsDescriptionListComponent {

  @Input()
  exemptionRequest?: ExemptionRequest

}
