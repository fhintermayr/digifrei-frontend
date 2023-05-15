import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class DateValidators {

  private static readonly dateNotInPastError: ValidationErrors = { dateNotInPast: true }
  private static readonly dateNotInFutureError: ValidationErrors = { dateNotInFuture: true }
  private static readonly dateNotPastOtherError: ValidationErrors = { dateNotPastOther: true }

  static pastOrPresent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (!control.value) return null

      const currentDate = new Date()
      const passedDate: Date = new Date(control.value)
      const isDateInPastOrPresent = passedDate <= currentDate

      return isDateInPastOrPresent ? null : this.dateNotInPastError
    }
  }

  static futureOrPresent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (!control.value) return null

      const currentDate = new Date()
      const passedDate: Date = new Date(control.value)
      const isDateInFutureOrPresent = passedDate >= currentDate

      return isDateInFutureOrPresent ? null : this.dateNotInFutureError
    }
  }

  static isPast(otherControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const otherControl = control.parent?.get(otherControlName);

      if (!otherControl || !control.value) return null

      const otherControlDate: Date = new Date(otherControl?.value);
      const thisControlDate: Date = new Date(control.value);

      const isThisControlDatePast = thisControlDate > otherControlDate;

      return isThisControlDatePast ? null : this.dateNotPastOtherError
    }
  }

}
