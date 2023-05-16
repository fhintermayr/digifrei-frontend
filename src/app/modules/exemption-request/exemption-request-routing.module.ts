import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RequestSubmissionComponent} from "./components/request-submission/request-submission.component";

const routes: Routes = [
  // { path: '', redirectTo: 'submission', pathMatch: "full" },
  { path: 'submission', component: RequestSubmissionComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemptionRequestRoutingModule {
}
