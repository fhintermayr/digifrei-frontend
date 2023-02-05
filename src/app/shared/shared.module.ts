import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
import { SharedInputComponent } from './components/shared-input/shared-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SharedDropdownComponent } from './components/shared-dropdown/shared-dropdown.component';



@NgModule({
  declarations: [
    SharedButtonComponent,
    SafeHtmlPipe,
    SharedInputComponent,
    SharedDropdownComponent
  ],
    exports: [
        SharedButtonComponent,
        SafeHtmlPipe,
        SharedInputComponent,
        SharedDropdownComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
