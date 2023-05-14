import {UserCreationDto} from "./user-creation-dto";
import {AccessRole} from "../../../shared/enum/access-role";

export class ApprenticeCreationDto implements UserCreationDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  departmentId: number;
  userType: AccessRole;
  socioEduExpertId: number;

  constructor(firstName: string, lastName: string, email: string, password: string, departmentId: number, socioEduExpertId: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.departmentId = departmentId;
    this.userType = AccessRole.APPRENTICE;
    this.socioEduExpertId = socioEduExpertId;
  }
}
