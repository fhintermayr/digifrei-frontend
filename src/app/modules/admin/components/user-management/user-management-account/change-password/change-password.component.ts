import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PasswordValidators} from "../../../../validators/password-validators";
import {RestApiService} from "../../../../../../core/services/rest-api.service";
import {NotificationService} from "../../../../../../core/services/notification.service";
import {first} from "rxjs";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  @Input()
  userId?: number

  readonly changePasswordForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirm: ['', [Validators.required, PasswordValidators.equalPasswords('password')]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private notification: NotificationService
  ) { }

  onSubmit() {
    const newPassword: string = this.changePasswordForm.controls.password.value!

    this.restApiService.changePassword(this.userId!, newPassword).pipe(first()).subscribe({
      next: () => this.notification.showSuccess("Password wurde geändert."),
      error: () => this.notification.showError("Passwort konnte nicht geändert werden.")
    })
  }

}
