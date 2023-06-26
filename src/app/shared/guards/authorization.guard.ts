import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../modules/authentication/service/auth.service";
import {AccessRole} from "../enum/access-role";

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const requiredRoles: AccessRole[] = route.data['requiredRoles']

  if (authService.isLoggedOut() || hasNotRequiredRole(authService ,requiredRoles)) {
    router.navigate(['/login'])
    return false
  }

  return true
}


const hasNotRequiredRole = (authService: AuthService, requiredRoles: AccessRole[]): boolean => {

  const usersRole = authService.getUsersRole()

  return requiredRoles.some(requiredRole => requiredRole.valueOf() !== usersRole.valueOf())
}

