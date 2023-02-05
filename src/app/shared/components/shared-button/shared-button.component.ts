import {Component, Input} from '@angular/core';

type buttonType = "button" | "submit" | "reset"
type buttonStyle = "primary" | "secondary"

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.css']
})
export class SharedButtonComponent {

  @Input()
  buttonType: buttonType = "button"
  @Input()
  buttonDesign: buttonStyle = "primary"
  @Input()
  isDisabled: boolean = false

}
