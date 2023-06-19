import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminDashboardListItemComponent } from './components/admin-dashboard/admin-dashboard-list-item/admin-dashboard-list-item.component';
import {CoreModule} from "../../core/core.module";
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserSearchResultComponent } from './components/user-search/user-search-result/user-search-result.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserManagementProfileComponent } from './components/user-management/user-management-profile/user-management-profile.component';
import { UserManagementAccountComponent } from './components/user-management/user-management-account/user-management-account.component';
import {NgIconComponent} from "@ng-icons/core";
import { DepartmentManagementComponent } from './components/department/department-management/department-management.component';
import { DepartmentGridListItemComponent } from './components/department/department-grid-list-item/department-grid-list-item.component';
import { CreateDepartmentModalComponent } from './components/department/create-department-modal/create-department-modal.component';
import { EditDepartmentModalComponent } from './components/department/edit-department-modal/edit-department-modal.component';
import { SocioEduExpertFormComponent } from './components/socio-edu-expert/socio-edu-expert-form/socio-edu-expert-form.component';
import { SocioEduExpertRegistrationComponent } from './components/socio-edu-expert/socio-edu-expert-registration/socio-edu-expert-registration.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminDashboardListItemComponent,
    UserRegistrationComponent,
    UserSearchComponent,
    UserSearchResultComponent,
    UserManagementComponent,
    UserManagementProfileComponent,
    UserManagementAccountComponent,
    DepartmentManagementComponent,
    DepartmentGridListItemComponent,
    CreateDepartmentModalComponent,
    EditDepartmentModalComponent,
    SocioEduExpertFormComponent,
    SocioEduExpertRegistrationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgIconComponent,
  ]
})
export class AdminModule { }
