import {Component, Input} from '@angular/core';
import {User} from "../../../../../shared/models/user";

@Component({
  selector: 'app-user-search-result',
  templateUrl: './user-search-result.component.html',
  styleUrls: ['./user-search-result.component.css']
})
export class UserSearchResultComponent {

  @Input()
  user: User = new User()

}
