import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class DateValidators {

  private static readonly dateNotInPastError: ValidationErrors = { dateNotInPast: true }
  private static readonly dateNotInFutureError: ValidationErrors = { dateNotInFuture: true }

  static pastOrPresent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const currentDate = new Date()
      const passedDate: Date = new Date(control.value)
      const isDateInPastOrPresent = passedDate <= currentDate

      return isDateInPastOrPresent ? null : this.dateNotInPastError
    }
  }

  static futureOrPresent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const currentDate = new Date()
      const passedDate: Date = new Date(control.value)
      const isDateInFutureOrPresent = passedDate >= currentDate

      return isDateInFutureOrPresent ? null : this.dateNotInFutureError
    }
  }

}
