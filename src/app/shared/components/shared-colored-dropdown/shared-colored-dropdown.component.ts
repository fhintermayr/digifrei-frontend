import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColoredDropdownOption} from "../../types/colored-dropdown-option";

@Component({
  selector: 'app-shared-colored-dropdown',
  templateUrl: './shared-colored-dropdown.component.html',
  styleUrls: ['./shared-colored-dropdown.component.css']
})
export class SharedColoredDropdownComponent implements OnInit {

  @Input()
  selectOptions: ColoredDropdownOption[] = [{title: "", description: ""}]
  @Input()
  selected: ColoredDropdownOption = this.selectOptions[0]
  @Output()
  dropdownSelectChanged: EventEmitter<string> = new EventEmitter();
  dropdownIsOpened: boolean = false

  ngOnInit(): void {
    if (!this.selected) this.selected = this.selectOptions[0]
  }

  onSelectOption(selectedOption: ColoredDropdownOption) {
    this.selected = selectedOption
    this.dropdownSelectChanged.emit(selectedOption.title)
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.dropdownIsOpened = !this.dropdownIsOpened
  }
}
