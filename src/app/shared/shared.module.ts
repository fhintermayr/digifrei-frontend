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
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';
import { CardComponent } from './components/card/card.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { SharedCheckboxComponent } from './components/shared-checkbox/shared-checkbox.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { DangerConfirmationModalComponent } from './components/danger-confirmation-modal/danger-confirmation-modal.component';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { IfRoleDirective } from './directives/if-role.directive';



@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedInputComponent,
    SharedDropdownComponent,
    PageHeadingComponent,
    TabsComponent,
    SectionHeadingComponent,
    SharedColoredDropdownComponent,
    AlertComponent,
    ClickedOutsideDirective,
    CardComponent,
    CardFooterComponent,
    CardBodyComponent,
    SharedCheckboxComponent,
    BadgeComponent,
    CardHeaderComponent,
    DangerConfirmationModalComponent,
    TablePaginationComponent,
    IfRoleDirective
  ],
    exports: [
        SharedButtonComponent,
        SharedInputComponent,
        SharedDropdownComponent,
        PageHeadingComponent,
        TabsComponent,
        SectionHeadingComponent,
        SharedColoredDropdownComponent,
        AlertComponent,
        ClickedOutsideDirective,
        CardComponent,
        CardFooterComponent,
        CardBodyComponent,
        SharedCheckboxComponent,
        BadgeComponent,
        CardHeaderComponent,
        TablePaginationComponent,
        IfRoleDirective
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
