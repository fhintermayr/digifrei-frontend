import {Component, OnInit} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {ExemptionRequestService} from "../../../service/exemption-request.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-self-submitted-requests-overview',
  templateUrl: './self-submitted-requests-overview.component.html',
  styleUrls: ['./self-submitted-requests-overview.component.css']
})
export class SelfSubmittedRequestsOverviewComponent implements OnInit {

  selfSubmittedRequests: ExemptionRequest[] = []

  constructor(private exemptionRequestService: ExemptionRequestService) { }

  async ngOnInit() {
    const exemptionRequests$ = this.exemptionRequestService.getSelfSubmittedExemptionRequests()
    this.selfSubmittedRequests = await lastValueFrom(exemptionRequests$)
  }
}
