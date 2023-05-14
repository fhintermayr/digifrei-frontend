import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestSubmissionComponent } from './components/request-submission/request-submission.component';
import {ExemptionRequestRoutingModule} from "./exemption-request-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RequestSubmissionComponent
  ],
  imports: [
    CommonModule,
    ExemptionRequestRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExemptionRequestModule { }
