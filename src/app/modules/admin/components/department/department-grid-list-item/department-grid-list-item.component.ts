import {Component, Input} from '@angular/core';
import {Department} from "../../../model/department";

@Component({
  selector: 'app-department-grid-list-item',
  templateUrl: './department-grid-list-item.component.html',
  styleUrls: ['./department-grid-list-item.component.css']
})
export class DepartmentGridListItemComponent {

  @Input()
  department?: Department

  isDropdownOpen = false

  onClickedOutside() {
    if (this.isDropdownOpen) this.isDropdownOpen = false
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

}
