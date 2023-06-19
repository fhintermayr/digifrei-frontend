import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {UserRegistrationComponent} from "./components/user-registration/user-registration.component";
import {UserSearchComponent} from "./components/user-search/user-search.component";
import {UserManagementComponent} from "./components/user-management/user-management.component";
import {
  UserManagementProfileComponent
} from "./components/user-management/user-management-profile/user-management-profile.component";
import {
  UserManagementAccountComponent
} from "./components/user-management/user-management-account/user-management-account.component";
import {
  DepartmentManagementComponent
} from "./components/department/department-management/department-management.component";
import {
  SocioEduExpertRegistrationComponent
} from "./components/socio-edu-expert/socio-edu-expert-registration/socio-edu-expert-registration.component";
import {
  SocioEduExpertSearchComponent
} from "./components/socio-edu-expert/socio-edu-expert-search/socio-edu-expert-search.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'departments', component: DepartmentManagementComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'search', component: UserSearchComponent },
  { path: 'socio-edu-expert', component: SocioEduExpertSearchComponent },
  { path: 'socio-edu-expert/register', component: SocioEduExpertRegistrationComponent },
  { path: 'user/:userId', component: UserManagementComponent, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full' },
      {path: 'profile', component: UserManagementProfileComponent},
      {path: 'account', component: UserManagementAccountComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
