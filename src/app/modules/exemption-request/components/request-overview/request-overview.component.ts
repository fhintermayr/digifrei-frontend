import { Component } from '@angular/core';
import {AuthService} from "../../../authentication/service/auth.service";
import {AccessRole} from "../../../../shared/enum/access-role";

@Component({
  selector: 'app-request-overview',
  templateUrl: './request-overview.component.html',
  styleUrls: ['./request-overview.component.css']
})
export class RequestOverviewComponent {

  currentUsersRole: AccessRole = this.authService.getUsersRole()

  constructor(private authService: AuthService) { }

  protected readonly AccessRole = AccessRole;
}
