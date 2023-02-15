import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SharedInputComponent } from './components/shared-input/shared-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SharedDropdownComponent } from './components/shared-dropdown/shared-dropdown.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { TabsComponent } from './components/tabs/tabs.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { SharedColoredDropdownComponent } from './components/shared-colored-dropdown/shared-colored-dropdown.component';
import { AlertComponent } from './components/alert/alert.component';
import {NgIconComponent} from "@ng-icons/core";



@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedInputComponent,
    SharedDropdownComponent,
    PageHeadingComponent,
    TabsComponent,
    SectionHeadingComponent,
    SharedColoredDropdownComponent,
    AlertComponent
  ],
    exports: [
        SharedButtonComponent,
        SharedInputComponent,
        SharedDropdownComponent,
        PageHeadingComponent,
        TabsComponent,
        SectionHeadingComponent,
        SharedColoredDropdownComponent,
        AlertComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        RouterLinkActive,
        NgIconComponent
    ]
})
export class SharedModule { }
