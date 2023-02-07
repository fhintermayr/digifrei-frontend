import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {UserRegistrationComponent} from "./components/user-registration/user-registration.component";
import {UserSearchComponent} from "./components/user-search/user-search.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'search', component: UserSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
