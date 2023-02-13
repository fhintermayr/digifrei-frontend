import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class PasswordValidators {

  private static readonly passwordsDoNotMatchError: ValidationErrors = { passwordsDoNotMatch: true }

  static equalPasswords(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const passwordToCompare = control.parent?.get(passwordControlName)?.value

      const passwordsAreEqual: boolean = passwordToCompare === control.value

      return passwordsAreEqual ? null : this.passwordsDoNotMatchError
    }
  }

}
