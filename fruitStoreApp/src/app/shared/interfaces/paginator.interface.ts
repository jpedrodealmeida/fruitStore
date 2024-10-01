
export interface Paginator<T> {
  currentPage: number;
  start: number;
  end: number;
  paginatedItems: T;
}
