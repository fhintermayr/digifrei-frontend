import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../modules/authentication/service/auth.service";
import {AccessRole} from "../enum/access-role";

@Injectable({
  providedIn: 'root'
})
export class AccessRoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const requiredRoles: AccessRole[] = route.data['requiredRoles']

    if (this.authService.isLoggedOut() || this.hasNotRequiredRole(requiredRoles)) {
      this.router.navigate(['/'])
      return false
    }

    return true
  }

  private hasNotRequiredRole(requiredRoles: AccessRole[]): boolean {

    const usersRole = this.authService.getUsersRole()

    return requiredRoles.some(requiredRole => requiredRole.valueOf() !== usersRole.valueOf())
  }

}
