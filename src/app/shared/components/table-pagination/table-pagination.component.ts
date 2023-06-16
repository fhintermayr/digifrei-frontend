import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Page} from "../../models/page";

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent {

  @Input()
  page: Page<any> | undefined
  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>()

  changePage(newPageNumber: number) {
    this.pageChange.emit(newPageNumber)
  }
}
