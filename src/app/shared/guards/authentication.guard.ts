import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../modules/authentication/service/auth.service";
import {NotificationService} from "../../core/services/notification.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const notificationService = inject(NotificationService)
  const router = inject(Router)

  if (authService.isLoggedOut()) {
    router.navigate(['/login'])

    if (authService.isSessionExpired()) notificationService.showInfo("Your session has expired")

    return false
  }

  if (authService.isSessionExpired()) {
    router.navigate(['/login'])
    notificationService.showInfo("Your session has expired")
    authService.logout()

    return false
  }

  return true
}
