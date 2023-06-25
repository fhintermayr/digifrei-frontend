import {Component, Input} from '@angular/core';
import {RestApiService} from "../../../../../../core/services/rest-api.service";
import {NotificationService} from "../../../../../../core/services/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  @Input()
  userId?: number

  constructor(
    private restApiService: RestApiService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  onUserDeletion() {
    this.restApiService.deleteUserById(this.userId!).subscribe({
      next: () => {
        this.notificationService.showSuccess(`Benutzer wurde erfolgreich gelöscht`)
        this.router.navigate(["/admin"])
      },
      error: () => this.notificationService.showError("Benutzer konnte nicht gelöscht werden")
    })
  }
}
