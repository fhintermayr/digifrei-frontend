import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent<T> implements OnInit {

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
  filteredOptions?: T[]

  selectedOption?: T
  isComboboxUnfolded = false

  ngOnInit() {
    this.filteredOptions = this.options
  }

  onSelectionChange(selectedOption: T) {
    const displayText = this.getDisplayText(selectedOption)
    this.setInputValue(<string>displayText)

    this.selectedOption = selectedOption
    this.toggleCombobox()
    this.selectionChange.emit(selectedOption)
  }

  onInputChange(inputValue: string) {

    if (!this.isComboboxUnfolded) this.toggleCombobox()

    const inputIsEmpty: boolean = inputValue.trim() === ''

    if (inputIsEmpty) {
      this.filteredOptions = this.options
      return
    }

    this.filteredOptions = this.getOptionsContainingSearchValue(inputValue)
  }

  getOptionsContainingSearchValue(searchValue: string): T[] {

    const sanitizedSearchValue = searchValue.trim().toLowerCase()

    return this.options!.filter(option => this.getDisplayText(option)?.toLowerCase()?.includes(sanitizedSearchValue))
  }

  setInputValue(inputText: string) {
    this.control.setValue(inputText)
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
