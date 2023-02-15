import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  dashboardListItems = [
    { title: "Register User", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", routerLink: "/admin/register", ngIconName: "heroUserPlusSolid" },
    { title: "Manage Users", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", routerLink: "/admin/search", ngIconName: "heroAdjustmentsHorizontalSolid" },
    { title: "Manage Events", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", routerLink: "", ngIconName: "heroCalendarSolid" },
  ]

}
