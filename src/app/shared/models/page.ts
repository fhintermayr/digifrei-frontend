import {Pageable} from "./pageable";

export interface Page<T> {
  content: T[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  number: number
  size: number
  first: boolean
  numberOfElements: number
  empty: boolean
}
