import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestSubmissionComponent } from './components/request-submission/request-submission.component';
import {ExemptionRequestRoutingModule} from "./exemption-request-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RequestOverviewComponent } from './components/request-overview/request-overview.component';
import { SelfSubmittedRequestsOverviewComponent } from './components/request-overview/self-submitted-requests-overview/self-submitted-requests-overview.component';
import { ExemptionRequestsTableComponent } from './components/request-overview/exemption-requests-table/exemption-requests-table.component';
import { DepartmentRequestsOverviewComponent } from './components/request-overview/department-requests-overview/department-requests-overview.component';



@NgModule({
  declarations: [
    RequestSubmissionComponent,
    RequestOverviewComponent,
    SelfSubmittedRequestsOverviewComponent,
    ExemptionRequestsTableComponent,
    DepartmentRequestsOverviewComponent
  ],
    imports: [
        CommonModule,
        ExemptionRequestRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ExemptionRequestModule { }
