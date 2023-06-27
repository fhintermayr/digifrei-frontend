import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  dashboardListItems = [
    { title: "Benutzer registrieren", description: "Lege hier einen neuen Account für einen Ausbilder oder Auszubildenden an", routerLink: "/admin/register", ngIconName: "heroUserPlusSolid" },
    { title: "Benutzer verwalten", description: "Verwalte hier den Benutzer-Account eines Ausbilders oder Auszubildenden", routerLink: "/admin/search", ngIconName: "heroAdjustmentsHorizontalSolid" },
    { title: "Fachdienst registrieren", description: "Lege hier einen neuen Fachdienst an", routerLink: "/admin/socio-edu-expert/register", ngIconName: "heroUserPlusSolid" },
    { title: "Fachdienst verwalten", description: "Verwalte hier die Informationen eines Fachdienstes", routerLink: "/admin/socio-edu-expert/search", ngIconName: "heroAdjustmentsHorizontalSolid" },
    { title: "Abteilungen verwalten", description: "Erstelle oder verwalte hier die Abteilungen", routerLink: "/admin/departments", ngIconName: "heroBuildingOffice2Solid" },
  ]

}
