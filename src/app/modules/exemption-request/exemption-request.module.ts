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
import {NgIconComponent} from "@ng-icons/core";
import { RequestDetailsComponent } from './components/request-details/request-details.component';
import { FormatExemptionCategoryPipe } from './pipes/format-exemption-category.pipe';
import { RequestDetailsDescriptionListComponent } from './components/request-details/request-details-description-list/request-details-description-list.component';
import { RequestDetailsEditingFormComponent } from './components/request-details/request-details-editing-form/request-details-editing-form.component';
import { RequestProcessingDescriptionListComponent } from './components/request-details/request-processing-description-list/request-processing-description-list.component';
import { ProcessingStatusBadgeComponent } from './components/processing-status-badge/processing-status-badge.component';
import {DialogModule} from "@angular/cdk/dialog";



@NgModule({
  declarations: [
    RequestSubmissionComponent,
    RequestOverviewComponent,
    SelfSubmittedRequestsOverviewComponent,
    ExemptionRequestsTableComponent,
    DepartmentRequestsOverviewComponent,
    RequestDetailsComponent,
    FormatExemptionCategoryPipe,
    RequestDetailsDescriptionListComponent,
    RequestDetailsEditingFormComponent,
    RequestProcessingDescriptionListComponent,
    ProcessingStatusBadgeComponent
  ],
    imports: [
        CommonModule,
        DialogModule,
        ExemptionRequestRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgIconComponent
    ]
})
export class ExemptionRequestModule { }
