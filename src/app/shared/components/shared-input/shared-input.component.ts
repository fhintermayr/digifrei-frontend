import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


type InputType =
  "date" | "datetime-local" | "email" | "month" | "number" |
  "password" | "search" | "tel" | "text" | "time" | "url" | "week"

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.css']
})
export class SharedInputComponent implements OnChanges {

  @Input()
  inputType: InputType = "text"
  @Input()
  placeholder: string = ""
  @Input()
  isDisabled: boolean = false
  @Input()
  inputId?: string
  @Input()
  showRequiredStar: boolean = true
  @Input()
  control: FormControl = new FormControl()

  errorMessages: Record<string, string> = {
    required: "Feld wird benötigt",
    minlength: "Die Eingabe ist zu kurz",
    maxlength: "Die Eingabe ist zu lang",
    min: "Der übergebene Wert is zu klein",
    max: "Der übergebene Wert is zu groß",
    email: "Bitte gib eine gültige E-Mail-Adresse ein",
    pattern: "Feld hat falsches Format",
    usernameIsTaken: "Der Benutzername ist bereits vergeben",
    unknownError: "Verfügbarkeit des Benutzernamens konnte nicht überprüft werden. " +
                  "Bitte überprüfe deine Internetverbindung",
    passwordsDoNotMatch: "Passwörter stimmen nicht überein",
    dateNotInFuture: "Das Datum muss in der Zukunft liegen",
    dateNotInPast: "Das Datum muss in der Vergangenheit liegen",
    dateNotPastOther: "Das Enddatum muss nach dem Startdatum liegen"
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setDisabledState()
  }

  onInput() {
    this.setToNullIfEmpty()
  }

  private setToNullIfEmpty() {
    if (this.control.value.trim() === '') this.control.setValue(null)
  }

  isInvalidAndTouched(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty)
  }

  isRequired(): boolean {
    return this.control.hasValidator(Validators.required)
  }

  private setDisabledState(): void {
    this.isDisabled ? this.control.disable() : this.control.enable()
  }
}
