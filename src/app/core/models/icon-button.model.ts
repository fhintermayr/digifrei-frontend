import {NavigationBarItemModel} from "./navigation-bar-item.model";

export class IconButtonModel extends NavigationBarItemModel{
  ngIconName: string

  constructor(displayName: string, routerLink: string, ngIconName: string) {
    super(displayName, routerLink);
    this.ngIconName = ngIconName;
  }
}
