import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Department} from "../../../model/department";
import {DepartmentService} from "../../../service/department.service";

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.css']
})
export class DepartmentManagementComponent {

  departments$!: Observable<Department[]>

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departments$ = this.departmentService.getAllDepartments()
  }

}
