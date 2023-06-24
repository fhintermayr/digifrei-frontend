import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginCredentials} from "../../model/login.credentials";
import {AuthService} from "../../service/auth.service";
import {NotificationService} from "../../../../core/services/notification.service";
import {Router} from "@angular/router";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  onSubmit() {
    const loginCredentials: LoginCredentials = {
      email: this.loginForm.get('email')?.value ?? '',
      password: this.loginForm.get('password')?.value ?? ''
    }

    this.authService.attemptLogin(loginCredentials).subscribe({
      next: jwtResponse => {
        this.authService.saveJwtInStorage(jwtResponse.token)
        this.router.navigate(['/exemption-request'])
      },
      error: error => this.handleLoginAttemptError(error)
    })

    this.loginForm.reset()
  }


  private handleLoginAttemptError(error: HttpErrorResponse) {
    error.status === HttpStatusCode.Unauthorized ?
      this.notificationService.showError("Wrong credentials!") :
      this.notificationService.showError("An unexpected error occurred")
  }

}
