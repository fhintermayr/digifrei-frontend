export class NavigationLinkModel {
  displayName: string
  routerLink: string

  constructor(displayName: string, routerLink: string) {
    this.displayName = displayName;
    this.routerLink = routerLink;
  }
}
