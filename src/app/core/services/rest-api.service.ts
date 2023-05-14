import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../shared/models/user";
import {UserCreationDto} from "../../modules/admin/dto/user-creation-dto";
import {UserUpdateDto} from "../../modules/admin/dto/user-update-dto";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpClient: HttpClient) { }

  public createUser(userToCreate: UserCreationDto): Observable<User> {

    const url = `${environment.apiUrl}/user/register`

    return this.httpClient.post<User>(url, userToCreate)
  }

  public getUserById(userId: number): Observable<User> {

    const url = `${environment.apiUrl}/user/${userId}`

    return this.httpClient.get<User>(url)
  }

  public checkIfUsernameIsTaken(username: string): Observable<void> {

    const url = `${environment.apiUrl}/user/${username}`

    return this.httpClient.head<void>(url)
  }

  public findAllUsersMatchingSearchTerm(searchTerm?: string, limit?: number): Observable<any> {

    let params = new HttpParams()
    if (searchTerm !== undefined) params = params.append('searchTerm', searchTerm)
    if (limit !== undefined) params = params.append('limit', limit)

    const url = `${environment.apiUrl}/user`

    return this.httpClient.get<User[]>(url, {params})
  }

  public updateUserById(userId: number, userWithUpdatedData: UserUpdateDto): Observable<User> {

    const url = `${environment.apiUrl}/user/${userId}`

    return this.httpClient.put<User>(url, userWithUpdatedData)
  }

  public changePassword(userId: number, newPassword: string): Observable<void> {

    const url = `${environment.apiUrl}/user/${userId}/password`

    return this.httpClient.put<void>(url, {newPassword: newPassword} )
  }

  public deleteUserById(userId: number): Observable<void> {

    const url = `${environment.apiUrl}/user/${userId}`

    return this.httpClient.delete<void>(url)
  }

}
