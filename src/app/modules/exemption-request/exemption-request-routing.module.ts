import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RequestSubmissionComponent} from "./components/request-submission/request-submission.component";
import {RequestOverviewComponent} from "./components/request-overview/request-overview.component";

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: "full" },
  { path: 'overview', component: RequestOverviewComponent },
  { path: 'submission', component: RequestSubmissionComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemptionRequestRoutingModule {
}
