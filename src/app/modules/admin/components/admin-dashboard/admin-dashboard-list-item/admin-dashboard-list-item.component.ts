import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-list-item',
  templateUrl: './admin-dashboard-list-item.component.html',
  styleUrls: ['./admin-dashboard-list-item.component.css']
})
export class AdminDashboardListItemComponent {

  @Input()
  title: string = ""
  @Input()
  description: string = ""
  @Input()
  routerLink: string = ""
  @Input()
  svgContentAsHtmlString: string = ""

}
