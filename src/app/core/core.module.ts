import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {BottomNavbarComponent} from "./components/bottom-navbar/bottom-navbar.component";
import {SafeHtmlPipe} from "../shared/pipes/safe-html.pipe";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    BottomNavbarComponent,
    SafeHtmlPipe
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent,
    BottomNavbarComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class CoreModule { }
