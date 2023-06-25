import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RestApiService} from "../../../../../core/services/rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../../../core/services/notification.service";
import {User} from "../../../../../shared/models/user";


@Component({
  selector: 'app-user-management-account',
  templateUrl: './user-management-account.component.html',
  styleUrls: ['./user-management-account.component.css']
})
export class UserManagementAccountComponent implements OnInit {

  currentlyManagingUser: User = new User()
  userId?: number

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notification: NotificationService
    ) { }


  ngOnInit(): void {
    const userIdProvidedInRoute: number = this.activatedRoute.snapshot.params['userId']
    this.userId = userIdProvidedInRoute

    this.restApiService.getUserById(userIdProvidedInRoute).subscribe({
      next: user => this.currentlyManagingUser = user,
      error: () => this.notification.showError("Benutzer konnte nicht geladen werden")
    })
  }

  submitUserDeletion() {
    this.restApiService.deleteUserById(this.currentlyManagingUser.id).subscribe({
      next: () => {
        this.notification.showSuccess(`User ${this.currentlyManagingUser.email} deleted successfully`)
        this.router.navigate(["/admin"])
      },
      error: () => this.notification.showError("User deletion can't be performed. Please try again later")
    })
  }

}
