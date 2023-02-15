import { Injectable } from '@angular/core';
import {NavigationBarItemModel} from "../models/navigation-bar-item.model";
import {IconButtonModel} from "../models/icon-button.model";

@Injectable({
  providedIn: 'root'
})
export class NavigationBarContentService {

  private navigationIconButtons: IconButtonModel[] = [
    {
      title: "Home",
      routerLink: "/home",
      ngIconName: 'heroHomeSolid'
    },
    {
      title: "Match",
      routerLink: "/match",
      ngIconName: 'heroFireSolid'
    },
    {
      title: "Events",
      routerLink: "/events",
      ngIconName: 'heroCalendarDaysSolid'
    },
    {
      title: "Chat",
      routerLink: "/chat",
      ngIconName: 'heroChatBubbleOvalLeftSolid'
    }
  ]

  private navigationLinks: NavigationBarItemModel[] = this.navigationIconButtons.map(navbarIconButton => {
    return new NavigationBarItemModel(navbarIconButton.title, navbarIconButton.routerLink)
  })

  constructor() { }

  getNavigationLinks(): NavigationBarItemModel[] {
    return this.navigationLinks
  }

  getNavigationIconButtons(): IconButtonModel[] {
    return this.navigationIconButtons
  }

}
