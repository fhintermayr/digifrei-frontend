import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-shared-checkbox',
  templateUrl: './shared-checkbox.component.html',
  styleUrls: ['./shared-checkbox.component.css']
})
export class SharedCheckboxComponent {

  @Input()
  inputId?: string

  @Input()
  control: FormControl = new FormControl()

}
