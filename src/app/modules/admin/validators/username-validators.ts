import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {catchError, map, Observable} from "rxjs";
import {RestApiService} from "../../../core/services/rest-api.service";
import {HttpResponse} from "@angular/common/http";

export class UsernameValidators {

  private static readonly USERNAME_AVAILABLE_STATUS_CODE = 409;
  private static readonly usernameIsTakenError: ValidationErrors= { usernameIsTaken: true }
  private static readonly unknownError: ValidationErrors= { unknownError: true }

  static usernameAvailable(restApiService: RestApiService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      return restApiService.checkIfUsernameIsTaken(control.value).pipe(
        map(() => this.usernameIsTakenError),
        catchError(async (error) => this.isUsernameAvailableResponse(error) ? null : this.unknownError)
      )

    }
  }

  private static isUsernameAvailableResponse(response: HttpResponse<any>): boolean {
    return response.status === this.USERNAME_AVAILABLE_STATUS_CODE
  }

}
