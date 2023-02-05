import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BottomNavbarComponent} from "./components/bottom-navbar/bottom-navbar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    BottomNavbarComponent,
    NotificationComponent
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent,
    BottomNavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    ToastrModule
  ]
})
export class CoreModule { }
