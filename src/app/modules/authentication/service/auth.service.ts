import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {LoginCredentials} from "../model/login.credentials";
import {JwtHelperService} from "@auth0/angular-jwt";

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

  public saveJwtInStorage(jwt: string) {
    localStorage.setItem("bearer_token", jwt)
  }

  public logout() {
    localStorage.removeItem("bearer_token")
  }

  public getUsersRole(): string {

    const token = this.getToken()
    const decodedToken = this.jwtHelper.decodeToken(token);

    return decodedToken.role;
  }

  public isLoggedIn(): boolean {
    return this.isTokenSetAndValid()
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn()
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
