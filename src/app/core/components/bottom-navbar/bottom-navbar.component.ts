import { Component } from '@angular/core';
import {IconButtonModel} from "../../models/icon-button.model";
import {NavigationBarContentService} from "../../services/navigation-bar-content.service";
import {AuthService} from "../../../modules/authentication/service/auth.service";

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {
  navbarButtons: IconButtonModel[] = this.navigationLinkService.getNavigationIconButtons()
  constructor(
    public authService: AuthService,
    private navigationLinkService: NavigationBarContentService,
  ) { }

}
