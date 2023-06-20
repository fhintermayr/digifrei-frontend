import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent<T> {

  @Input()
  options?: T[]
  @Input()
  displayProperties?: (keyof T)[]
  @Input()
  control: FormControl = new FormControl()
  @Input()
  label?: string
  @Output()
  selectionChange: EventEmitter<T> = new EventEmitter<T>()

  selectedOption?: T

  isComboboxUnfolded = false

  onSelectionChange(selectedOption: T) {
    this.selectedOption = selectedOption
    this.toggleCombobox()
    this.selectionChange.emit(selectedOption)
  }

  getDisplayText(option: T) {
    return this.displayProperties?.map(displayProperty => option[displayProperty]).join(' ')
  }

  toggleCombobox() {
    this.isComboboxUnfolded = !this.isComboboxUnfolded
  }

  isRequired(): boolean {
    return this.control.hasValidator(Validators.required)
  }

  isInvalidAndTouched(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty)
  }

}
