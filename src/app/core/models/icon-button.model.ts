import {NavigationBarItemModel} from "./navigation-bar-item.model";

export class IconButtonModel extends NavigationBarItemModel{
  svgContentAsHtml: string

  constructor(displayName: string, routerLink: string, iconAsHtml: string) {
    super(displayName, routerLink);
    this.svgContentAsHtml = iconAsHtml;
  }
}
