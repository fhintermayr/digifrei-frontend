import {Component} from '@angular/core';
import {RestApiService} from "../../../../core/services/rest-api.service";
import {User} from "../../../../shared/models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  matchingUsers$!: Observable<User[]>
  isSearchTermProvided: boolean = false

  constructor(private restApiService: RestApiService) {}

  onInput(searchTerm: string) {
    this.isSearchTermProvided = searchTerm?.length > 0
    this.searchUsersMatchingSearchTerm(searchTerm)
  }

  searchUsersMatchingSearchTerm(searchTerm: string) {
    this.matchingUsers$ = this.restApiService.findAllUsersMatchingSearchTerm(searchTerm, 10)
  }

}
