import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationLinkModel} from "../../models/navigation-link.model";
import {NavigationBarContentService} from "../../services/navigation-bar-content.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('showHideProfileDropdown', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(.95)'
      })),
      state('visible', style({
        opacity: 100,
        transform: 'scale(1)'
      })),
      transition('hidden => visible', [
        animate('200ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('75ms ease-in')
      ]),
    ])
  ]
})
export class NavbarComponent {

  isProfileDropdownOpen: boolean = false
  navigationLinks: NavigationLinkModel[] = this.navigationLinkService.getNavigationLinks()

  profileDropdownItems: NavigationLinkModel[] = [
    { displayName: "Admin Menu", routerLink: "/admin" },
    { displayName: "Your Profile", routerLink: "/profile" },
    { displayName: "Settings", routerLink: "/settings" },
    { displayName: "Sign out", routerLink: "/logout" }
]

  constructor(private navigationLinkService: NavigationBarContentService) { }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen
  }

}
