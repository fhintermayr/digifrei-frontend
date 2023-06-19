import { Component } from '@angular/core';
import {lastValueFrom, Observable} from "rxjs";
import {Department} from "../../../model/department";
import {DepartmentService} from "../../../service/department.service";
import {ModalService} from "../../../../../shared/service/modal.service";
import {NotificationService} from "../../../../../core/services/notification.service";

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.css']
})
export class DepartmentManagementComponent {

  departments$!: Observable<Department[]>

  constructor(
    private departmentService: DepartmentService,
    private modalService: ModalService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getAllDepartments()
  }

  getAllDepartments() {
    this.departments$ = this.departmentService.getAllDepartments()
  }

  async openCreateDepartmentModal() {
    const modalRef = this.modalService.createNewDepartmentModal()
    const modalResponse = await lastValueFrom(modalRef.closed)

    const responseContainsDepartmentName = modalResponse && typeof modalResponse === "string"

    if (!responseContainsDepartmentName) return

    this.departmentService.createDepartment(modalResponse).subscribe({
      next: department => {
        this.notificationService.showSuccess(`Abteilung ${department.name} wurde erstellt`)
        this.getAllDepartments()
      },
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Bitte wende dich an den Support, oder versuche es später erneut")
    })
  }

  async onDepartmentNameChange(departmentId: number, newDepartmentName: string) {

    this.departmentService.editDepartment(departmentId, newDepartmentName).subscribe({
      next: department => {
        this.notificationService.showSuccess(`Abteilung wurde nach ${department.name} umbenannt`)
        this.getAllDepartments()
      },
      error: () => this.notificationService.showError("Etwas ist schiefgelaufen. Bitte wende dich an den Support, oder versuche es später erneut")
    })
  }

}
