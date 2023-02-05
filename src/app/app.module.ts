import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {AdminModule} from "./modules/admin/admin.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NotificationComponent} from "./core/components/notification/notification.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
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
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
