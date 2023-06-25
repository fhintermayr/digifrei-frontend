import { Component } from '@angular/core';
import {AuthService} from "../../../modules/authentication/service/auth.service";
import {AccessRole} from "../../../shared/enum/access-role";

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {

  constructor(public authService: AuthService,) { }

  protected readonly AccessRole = AccessRole;

}
