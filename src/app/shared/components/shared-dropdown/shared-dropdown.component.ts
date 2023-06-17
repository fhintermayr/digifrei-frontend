import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

export type SelectOption = { label: string; value: string | number }

@Component({
  selector: 'app-shared-dropdown',
  templateUrl: './shared-dropdown.component.html',
  styleUrls: ['./shared-dropdown.component.css']
})
export class SharedDropdownComponent implements OnChanges {

  @Input()
  options: SelectOption[] = []
  @Input()
  inputId?: string
  @Input()
  isDisabled: boolean = false
  @Input()
  showRequiredStar: boolean = true
  @Input()
  control: FormControl = new FormControl()

  ngOnChanges(changes: SimpleChanges): void {
    this.setDisabledState()
  }

  isRequired(): boolean {
    return this.control.hasValidator(Validators.required)
  }

  isInvalidAndTouched(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty)
  }

  private setDisabledState(): void {
    this.isDisabled ? this.control.disable() : this.control.enable()
  }

}
