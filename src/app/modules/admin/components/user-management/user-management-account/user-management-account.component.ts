import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-management-account',
  templateUrl: './user-management-account.component.html',
  styleUrls: ['./user-management-account.component.css']
})
export class UserManagementAccountComponent {

  userId: number = this.activatedRoute.snapshot.params['userId']

  constructor(private activatedRoute: ActivatedRoute) { }

}
