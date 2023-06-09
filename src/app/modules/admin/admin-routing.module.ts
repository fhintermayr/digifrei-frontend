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
import {
  SocioEduExpertEditingComponent
} from "./components/socio-edu-expert/socio-edu-expert-editing/socio-edu-expert-editing.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'departments', component: DepartmentManagementComponent, data: { breadcrumb: 'Abteilungen verwalten' } },
  { path: 'register', component: UserRegistrationComponent, data: { breadcrumb: 'Benutzer registrieren' } },
  { path: 'search', component: UserSearchComponent },
  { path: 'socio-edu-expert', component: SocioEduExpertSearchComponent },
  { path: 'socio-edu-expert/register', component: SocioEduExpertRegistrationComponent, data: { breadcrumb: 'Fachdienst registrieren' } },
  { path: 'socio-edu-expert/search', component: SocioEduExpertSearchComponent },
  { path: 'socio-edu-expert/:id', component: SocioEduExpertEditingComponent, data: { breadcrumb: 'Fachdienst bearbeiten' } },
  { path: 'user/:userId', component: UserManagementComponent, data: { breadcrumb: 'Benutzer verwalten' }, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full' },
      {path: 'profile', component: UserManagementProfileComponent, data: { breadcrumb: 'Profil' }},
      {path: 'account', component: UserManagementAccountComponent, data: { breadcrumb: 'Account & Sicherheit' }}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
