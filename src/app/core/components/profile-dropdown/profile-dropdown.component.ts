import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../shared/models/user";
import {AuthService} from "../../../modules/authentication/service/auth.service";
import {AccessRole} from "../../../shared/enum/access-role";
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css'],
  animations: [
    trigger('showHideProfileDropdown', [
      state('void', style({
        opacity: 0,
        transform: 'scale(.95)'
      })),
      state('visible', style({
        opacity: 100,
        transform: 'scale(1)'
      })),
      transition(':enter', [
        animate('200ms ease-out')
      ]),
      transition(':leave', [
        animate('75ms ease-in')
      ]),
    ])
  ]
})
export class ProfileDropdownComponent {

  authenticatedUser: Observable<User> = this.authService.getCurrentUser()
  isDropdownOpen: boolean = false

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout()
    this.toggleDropdown()
  }

  onClickedOutside() {
    if (this.isDropdownOpen) this.isDropdownOpen = false
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  protected readonly AccessRole = AccessRole;

}
