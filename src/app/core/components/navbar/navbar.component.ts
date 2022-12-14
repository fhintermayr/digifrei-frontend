import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationLinkModel} from "../../models/navigation-link.model";

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

  navbarItems: NavigationLinkModel[] = [
    { displayName: "Home", routerLink: "/home" },
    { displayName: "Match", routerLink: "/match" },
    { displayName: "Events", routerLink: "/events" },
    { displayName: "Chat", routerLink: "/chat" }
  ]

  profileDropdownItems: NavigationLinkModel[] = [
    { displayName: "Admin Menu", routerLink: "/admin" },
    { displayName: "Your Profile", routerLink: "/profile" },
    { displayName: "Settings", routerLink: "/settings" },
    { displayName: "Sign out", routerLink: "/logout" }
]

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen
  }

}
