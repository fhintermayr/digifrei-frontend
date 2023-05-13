import {AccessRole} from "../../../shared/enum/access-role";

export interface UserCreationDto {
  firstName: string
  lastName: string
  email: string
  password: string
  departmentId: number
  userType: AccessRole
}
