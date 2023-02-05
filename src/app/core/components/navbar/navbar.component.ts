import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NavigationBarItemModel} from "../../models/navigation-bar-item.model";
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
  navigationLinks: NavigationBarItemModel[] = this.navigationLinkService.getNavigationLinks()

  profileDropdownItems: NavigationBarItemModel[] = [
    { title: "Admin Menu", routerLink: "/admin" },
    { title: "Your Profile", routerLink: "/profile" },
    { title: "Settings", routerLink: "/settings" },
    { title: "Sign out", routerLink: "/logout" }
]

  constructor(private navigationLinkService: NavigationBarContentService) { }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen
  }

}
