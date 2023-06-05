import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExemptionRequest} from "../../model/exemption-request";
import {Observable} from "rxjs";
import {ExemptionRequestService} from "../../service/exemption-request.service";
import {ExemptionCategory} from "../../enum/exemption-category";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  private exemptionRequestId!: number
  exemptionRequest$!: Observable<ExemptionRequest>

  constructor(
    private route: ActivatedRoute,
    private exemptionRequestService: ExemptionRequestService
  ) { }

  ngOnInit(): void {
    this.exemptionRequestId = this.getIdFromRoute()
    this.exemptionRequest$ = this.exemptionRequestService.getExemptionRequestById(this.exemptionRequestId)
  }

  private getIdFromRoute(): number {

    const routeId = this.route.snapshot.paramMap.get('id')

    return parseInt(<string>routeId)
  }

  protected readonly ExemptionCategory = ExemptionCategory;
}
