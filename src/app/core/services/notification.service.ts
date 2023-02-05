import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {NotificationType} from "../components/notification/notification-type";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toaster: ToastrService) { }

  showSuccess(message: string, title: string = "Erfolg!") {
    this.toaster.success(
      message,
      title,
      {
        payload: {
          notificationType: NotificationType.SUCCESS
        }
      }
    )
  }

  showInfo(message: string, title: string = "Info!") {
    this.toaster.info(
      message,
      title,
      {
        payload: {
          notificationType: NotificationType.INFO
        }
      }
    )
  }

  showWarning(message: string, title: string = "Warnung") {
    this.toaster.warning(
      message,
      title,
      {
        payload: {
          notificationType: NotificationType.WARNING
        }
      }
    )
  }

  showError(message: string, title: string = "Fehler!") {
    this.toaster.error(
      message,
      title,
      {
        payload: {
          notificationType: NotificationType.ERROR
        }
      }
    )
  }

}
