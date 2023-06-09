import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {AdminModule} from "./modules/admin/admin.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NotificationComponent} from "./core/components/notification/notification.component";
import {NgIconsModule} from "@ng-icons/core";
import {ngIcons} from "./ng-icons";
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ExemptionRequestModule} from "./modules/exemption-request/exemption-request.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ExemptionRequestModule,
    RouterOutlet,
    ToastrModule.forRoot({
      toastComponent: NotificationComponent,
      closeButton: true,
      progressBar: true,
      tapToDismiss: false,
      preventDuplicates: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true,
      maxOpened: 5,
      extendedTimeOut: 5_000
    }),
    NgIconsModule.withIcons(ngIcons),
    AppRoutingModule,
    AdminModule,
    AuthenticationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
