import {NavigationLinkModel} from "./navigation-link.model";

export class IconButtonModel extends NavigationLinkModel{
  svgContentAsHtml: string

  constructor(displayName: string, routerLink: string, iconAsHtml: string) {
    super(displayName, routerLink);
    this.svgContentAsHtml = iconAsHtml;
  }
}
