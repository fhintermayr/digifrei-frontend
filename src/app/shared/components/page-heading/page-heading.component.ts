import {Component, Input} from '@angular/core';
import {SiteNavigationLink} from "../../types/site-navigation-link";

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css']
})
export class PageHeadingComponent {

  @Input()
  breadcrumbs?: SiteNavigationLink[]

}
