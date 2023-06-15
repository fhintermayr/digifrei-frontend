import {Component, OnInit} from '@angular/core';
import {ExemptionRequest} from "../../../model/exemption-request";
import {ExemptionRequestService} from "../../../service/exemption-request.service";
import {lastValueFrom} from "rxjs";
import {User} from "../../../../../shared/models/user";
import {AuthService} from "../../../../authentication/service/auth.service";
import {SiteNavigationLink} from "../../../../../shared/types/site-navigation-link";
import {Page} from "../../../../../shared/models/page";

@Component({
  selector: 'app-department-requests-overview',
  templateUrl: './department-requests-overview.component.html',
  styleUrls: ['./department-requests-overview.component.css']
})
export class DepartmentRequestsOverviewComponent implements OnInit {

  requestsOfOwnDepartment?: Page<ExemptionRequest>
  currentUser?: User

  readonly breadcrumbs: SiteNavigationLink[] = [
    {displayName: "Dienstbefreiungsanträge", routerLink: "/exemption-request"},
    {displayName: "Übersicht", routerLink: "/exemption-request/overview"},
  ]

  constructor(
    private authService: AuthService,
    private exemptionRequestService: ExemptionRequestService
  ) { }

  async ngOnInit() {
    const currentUser$ = this.authService.getCurrentUser()
    this.currentUser = await lastValueFrom(currentUser$)

    const exemptionRequests$ = this.exemptionRequestService.getRequestsOfOwnDepartment()
    this.requestsOfOwnDepartment = await lastValueFrom(exemptionRequests$)
  }

}
