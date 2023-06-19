import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  dashboardListItems = [
    { title: "Benutzer registrieren", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", routerLink: "/admin/register", ngIconName: "heroUserPlusSolid" },
    { title: "Benutzer verwalten", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", routerLink: "/admin/search", ngIconName: "heroAdjustmentsHorizontalSolid" },
    { title: "Abteilungen verwalten", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", routerLink: "/admin/departments", ngIconName: "heroBuildingOffice2Solid" },
  ]

}
