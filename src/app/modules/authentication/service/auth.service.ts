import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {LoginCredentials} from "../model/login.credentials";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../../../shared/models/user";
import {AccessRole} from "../../../shared/enum/access-role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService = new JwtHelperService()

  constructor(private httpClient: HttpClient) { }

  public attemptLogin(loginCredentials: LoginCredentials): Observable<any> {

    const url = `${environment.apiUrl}/auth/login`

    return this.httpClient.post<any>(url, loginCredentials)
  }

  public getCurrentUser(): Observable<User> {

    const url = `${environment.apiUrl}/auth/user`

    return this.httpClient.get<User>(url)
  }

  public saveJwtInStorage(jwt: string) {
    localStorage.setItem("bearer_token", jwt)
  }

  public logout() {
    localStorage.removeItem("bearer_token")
  }

  public getUsersRole(): AccessRole {

    const token = this.getToken()
    const decodedToken = this.jwtHelper.decodeToken(token);

    return AccessRole[decodedToken.role as keyof typeof AccessRole];
  }

  public hasAnyRole(requiredRoles: AccessRole[]): boolean {
    const usersRole = this.getUsersRole()

    return requiredRoles.some(requiredRole => requiredRole.valueOf() === usersRole.valueOf())
  }

  public hasRole(requiredRole: AccessRole): boolean {
    const usersRole = this.getUsersRole()

    return requiredRole.valueOf() === usersRole.valueOf()
  }

  public isLoggedIn(): boolean {
    return this.isTokenSetAndValid()
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn()
  }

  public isSessionExpired(): boolean {
    const token = localStorage.getItem("bearer_token")

    return !!(token && this.jwtHelper.isTokenExpired(token));
  }

  private isTokenSetAndValid(): boolean {
    const token = localStorage.getItem("bearer_token")

    return token ? !this.jwtHelper.isTokenExpired(token) : false
  }

  private getToken(): string {
    const token = localStorage.getItem("bearer_token")

    if (!token) throw new Error("Can't access token before if no user is logged in!")

    return token
  }

}
