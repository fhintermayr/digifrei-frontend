import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestSubmissionComponent } from './components/request-submission/request-submission.component';
import {ExemptionRequestRoutingModule} from "./exemption-request-routing.module";



@NgModule({
  declarations: [
    RequestSubmissionComponent
  ],
  imports: [
    CommonModule,
    ExemptionRequestRoutingModule
  ]
})
export class ExemptionRequestModule { }
