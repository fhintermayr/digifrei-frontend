import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "../model/department";
import {environment} from "../../../../environments/environment";
import {DepartmentCreationDto} from "../dto/department-creation-dto";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  public createDepartment(name: string): Observable<Department> {

    const departmentCreationDto = new DepartmentCreationDto(name)

    const url = `${environment.apiUrl}/department`

    return this.httpClient.post<Department>(url, departmentCreationDto)
  }

  public getAllDepartments(): Observable<Department[]> {

    const url = `${environment.apiUrl}/department`

    return this.httpClient.get<Department[]>(url)
  }

  public editDepartment(departmentId: number, newDepartmentName: string) {
    const departmentCreationDto = new DepartmentCreationDto(newDepartmentName)

    const url = `${environment.apiUrl}/department/${departmentId}`

    return this.httpClient.put<Department>(url, departmentCreationDto)
  }
}
