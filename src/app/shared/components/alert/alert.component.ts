import {Component, Input} from '@angular/core';
import {AlertType} from "../../types/alert-type";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input()
  alertType: AlertType = "info"

}
