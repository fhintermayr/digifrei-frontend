import {Component} from '@angular/core';
import {Toast, ToastPackage, ToastrService} from "ngx-toastr";
import {NotificationType} from "./notification-type";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent extends Toast {

  notificationType: NotificationType

  constructor(
    protected override toastrService: ToastrService,
    public override toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage)
    this.notificationType = this.toastPackage.config.payload.notificationType
  }

}
