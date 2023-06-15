import {Component, Input} from '@angular/core';
import {Page} from "../../models/page";

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent {

  @Input()
  page: Page<any> | undefined

}
