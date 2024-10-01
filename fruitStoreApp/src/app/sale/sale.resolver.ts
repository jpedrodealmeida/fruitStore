import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../shared/interfaces/product.interface';
import {
  ResolveFn,
} from '@angular/router';
import { SaleService } from './sale.service';

export const saleResolver: ResolveFn<ProductsModel> = (): Observable<ProductsModel> => {
  const saleService = inject(SaleService);
  return saleService.getProducts();
};
