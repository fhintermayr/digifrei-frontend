import {Component, Input} from '@angular/core';
import {SiteNavigationLink} from "../../types/site-navigation-link";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input() tabs: SiteNavigationLink[] = []

}
