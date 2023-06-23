import {Component} from '@angular/core';
import {NavigationBarItemModel} from "../../models/navigation-bar-item.model";
import {NavigationBarContentService} from "../../services/navigation-bar-content.service";
import {AuthService} from "../../../modules/authentication/service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navigationLinks: NavigationBarItemModel[] = this.navigationLinkService.getNavigationLinks()
  constructor(
    public authService: AuthService,
    private navigationLinkService: NavigationBarContentService,
  ) { }

}
