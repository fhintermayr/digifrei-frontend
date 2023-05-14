import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "../model/department";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  public getAllDepartments(): Observable<Department[]> {

    const url = `${environment.apiUrl}/department`

    return this.httpClient.get<Department[]>(url)
  }
}
