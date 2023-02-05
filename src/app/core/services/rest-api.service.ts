import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  public createUser(userToCreate: User): Observable<User> {

    const url = `${environment.apiUrl}/user/register`

    return this.httpClient.post<User>(url, userToCreate)
  }

  public checkIfUsernameIsTaken(username: string): Observable<any> {

    const url = `${environment.apiUrl}/user/${username}`

    return this.httpClient.head(url)
  }

}
