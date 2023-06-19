import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Department} from "../../../model/department";
import {lastValueFrom} from "rxjs";
import {ModalService} from "../../../../../shared/service/modal.service";

@Component({
  selector: 'app-department-grid-list-item',
  templateUrl: './department-grid-list-item.component.html',
  styleUrls: ['./department-grid-list-item.component.css']
})
export class DepartmentGridListItemComponent {

  @Input()
  department!: Department
  @Output()
  departmentNameChange: EventEmitter<string> = new EventEmitter<string>()

  isDropdownOpen = false

  constructor(private modalService: ModalService) { }

  async openEditDepartmentModal(departmentToEdit: Department) {
    const modalRef = this.modalService.creatEditDepartmentModal(departmentToEdit.name)
    const modalResponse = await lastValueFrom(modalRef.closed)

    const responseContainsDepartmentName = modalResponse && typeof modalResponse === "string"

    if (!responseContainsDepartmentName) return

    this.departmentNameChange.emit(modalResponse)
  }

  onClickedOutside() {
    if (this.isDropdownOpen) this.isDropdownOpen = false
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

}
