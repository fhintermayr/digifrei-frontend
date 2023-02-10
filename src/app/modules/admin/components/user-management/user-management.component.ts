import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestApiService} from "../../../../core/services/rest-api.service";
import {User} from "../../../../shared/models/user";
import {Observable} from "rxjs";
import {SiteNavigationLink} from "../../../../shared/types/site-navigation-link";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  user$!: Observable<User>

  readonly tabs: SiteNavigationLink[] = [
    {displayName: "Profile", routerLink: "./profile"},
    {displayName: "Account & Security", routerLink: "./account"}
  ]

  constructor(
    private restApiService: RestApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const userIdProvidedInRoute: number = this.activatedRoute.snapshot.params['userId']
    this.user$ = this.restApiService.getUserById(userIdProvidedInRoute)
  }

}
