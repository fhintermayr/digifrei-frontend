import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PasswordValidators} from "../../../validators/password-validators";
import {RestApiService} from "../../../../../core/services/rest-api.service";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../../core/services/notification.service";
import {ColoredDropdownOption} from "../../../../../shared/types/colored-dropdown-option";
import {User} from "../../../../../shared/models/user";


@Component({
  selector: 'app-user-management-account',
  templateUrl: './user-management-account.component.html',
  styleUrls: ['./user-management-account.component.css']
})
export class UserManagementAccountComponent implements OnInit {

  readonly accessRoleOptions: ColoredDropdownOption[] = [
    { title: "Administrator", description: "Grants all basic and all administrative permissions, e.g. user creation, user deletion" },
    { title: "Member", description: "Grants all basic permissions like event creation, or showing profile of other users" }
  ]
  readonly passwordResetForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirm: ['', [Validators.required, PasswordValidators.equalPasswords('password')]]
  })

  currentlyManagingUser: User = new User()
  usersRespectiveAccessRoleDropdownOption = this.accessRoleOptions[1]


  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService
    ) { }


  ngOnInit(): void {
    const userIdProvidedInRoute: number = this.activatedRoute.snapshot.params['userId']

    this.restApiService.getUserById(userIdProvidedInRoute).subscribe({
      next: user => {
        this.currentlyManagingUser = user
        this.usersRespectiveAccessRoleDropdownOption = this.getDropdownOptionDependingOnUsersAccessRole(user)
      },
      error: () => this.notification.showError("Benutzer konnte nicht geladen werden")
    })
  }

  onSubmit() {
    const newPassword: string = this.passwordResetForm.get('password')?.value || ''

    this.restApiService.changePassword(this.currentlyManagingUser.id, newPassword).subscribe({
      next: () => this.notification.showSuccess("Password wurde geändert"),
      error: () => this.notification.showError("Passwort konnte nicht geändert werden")
    })
  }

  onDropdownChange($event: string) {
    const accessRoleAsString: string = $event.toUpperCase()

    this.restApiService.changeUsersAccessRoleById(this.currentlyManagingUser.id, accessRoleAsString).subscribe({
      next: updatedUser => {
        this.notification.showSuccess(`Changed access role to ${$event}`)
        this.currentlyManagingUser = updatedUser
      },
      error: () => this.notification.showError("There was an error on updating the access role. Please try again later")
    })
  }

  private getDropdownOptionDependingOnUsersAccessRole(user: User): ColoredDropdownOption {
    return user.accessRole === "ADMINISTRATOR" ?
      this.accessRoleOptions[0] :
      this.accessRoleOptions[1]
  }

}
