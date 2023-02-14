import {Component, Input} from '@angular/core';

type ButtonType = "button" | "submit" | "reset"
type ButtonStyle = "primary" | "secondary" | "danger"

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.css']
})
export class SharedButtonComponent {

  @Input()
  buttonType: ButtonType = "button"
  @Input()
  buttonDesign: ButtonStyle = "primary"
  @Input()
  isDisabled: boolean = false

}
