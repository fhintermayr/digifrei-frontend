import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
import { SharedInputComponent } from './components/shared-input/shared-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SharedDropdownComponent } from './components/shared-dropdown/shared-dropdown.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { TabsComponent } from './components/tabs/tabs.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';



@NgModule({
  declarations: [
    SharedButtonComponent,
    SafeHtmlPipe,
    SharedInputComponent,
    SharedDropdownComponent,
    PageHeadingComponent,
    TabsComponent,
    SectionHeadingComponent
  ],
    exports: [
        SharedButtonComponent,
        SafeHtmlPipe,
        SharedInputComponent,
        SharedDropdownComponent,
        PageHeadingComponent,
        TabsComponent,
        SectionHeadingComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule { }
