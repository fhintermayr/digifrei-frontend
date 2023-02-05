export class NavigationBarItemModel {
  title: string
  routerLink: string

  constructor(displayName: string, routerLink: string) {
    this.title = displayName;
    this.routerLink = routerLink;
  }
}
