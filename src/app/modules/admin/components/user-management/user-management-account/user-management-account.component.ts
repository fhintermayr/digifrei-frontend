import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PasswordValidators} from "../../../validators/password-validators";
import {RestApiService} from "../../../../../core/services/rest-api.service";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../../core/services/notification.service";

@Component({
  selector: 'app-user-management-account',
  templateUrl: './user-management-account.component.html',
  styleUrls: ['./user-management-account.component.css']
})
export class UserManagementAccountComponent implements OnInit {

  readonly passwordResetForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirm: ['', [Validators.required, PasswordValidators.equalPasswords('password')]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private restApiService: RestApiService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newPassword: string = this.passwordResetForm.get('password')?.value || ''
    const userIdProvidedInRoute: number = this.activatedRoute.snapshot.params['userId']

    this.restApiService.changePassword(userIdProvidedInRoute, newPassword).subscribe({
      next: () => this.notification.showSuccess("Password wurde geändert"),
      error: () => this.notification.showError("Passwort konnte nicht geändert werden")
    })
  }

}
