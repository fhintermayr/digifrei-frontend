import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { AdminDashboardListItemComponent } from './components/admin-dashboard/admin-dashboard-list-item/admin-dashboard-list-item.component';
import {CoreModule} from "../../core/core.module";
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminDashboardListItemComponent,
    UserRegistrationComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        AdminRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AdminModule { }
