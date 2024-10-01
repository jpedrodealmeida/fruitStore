import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsModel } from '../shared/interfaces/product.interface';
import { PRODUCT_MOCK } from '../shared/mocks/products.mock';

@Injectable({
  providedIn: 'root',
})
export class SaleService {

  private products$ = new BehaviorSubject<ProductsModel>({data: null, pagination: null})

  private currentPaginator = { start: 0, end: 30 };

  constructor() {}

  getProducts(params?: { start?: number; end?: number; filter?: string }): Observable<ProductsModel> {

    let products = PRODUCT_MOCK;

    if (params?.filter) {
      const filterName = params.filter.toLowerCase().trim();
      products = products.filter(product => product.name.toLowerCase().includes(filterName));
    }

    if((params?.start || params?.start === 0) && params.end) {
      const start = params.start * params.end;
      const end = start + params.end;
      this.currentPaginator.start = start;
      this.currentPaginator.end = end;
    }

    if(params?.filter) {
      this.currentPaginator.start = 0;
      this.currentPaginator.end = 12;
    }

    const paginatedProducts = products.slice(
      this.currentPaginator.start, this.currentPaginator.end);

    this.products$.next({data: paginatedProducts,
      pagination: {
        currentPage: params?.start || 0,
        pageSize: this.currentPaginator.end - this.currentPaginator.start,
        totalItems: products.length
      }});

    return this.products$;
  }

}
