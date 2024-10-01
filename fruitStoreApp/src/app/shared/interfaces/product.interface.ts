export interface Product {
  id: number;
  name: string;
  img: string;
  description: string | null;
}

export interface ProductsModel {
  data: Product[] | null;
  pagination: PaginationConfig | null;
}

export interface PaginationConfig {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}
