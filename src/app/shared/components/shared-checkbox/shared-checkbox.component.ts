import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shared-checkbox',
  templateUrl: './shared-checkbox.component.html',
  styleUrls: ['./shared-checkbox.component.css']
})
export class SharedCheckboxComponent {

  @Input()
  inputId?: string

}
