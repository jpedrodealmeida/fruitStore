import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Product, ProductsModel } from '../../../shared/interfaces/product.interface';
import { SaleService } from '../../sale.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SaleDetailsComponent } from '../../modal/sale-details/sale-details.component';


@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.scss',
})
export class SaleListComponent implements OnInit, OnDestroy {
  readonly initialPageSize = 12;
  private subscription = new Subscription;
  private dialog = inject(MatDialog);
  products$!: Observable<Product[]>;
  paginatedItems!: ProductsModel;


  private saleService = inject(SaleService)

  ngOnInit() {
    this.getProducts(0, this.initialPageSize);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handlePageEvent(event: PageEvent) {
    this.getProducts(event.pageIndex, event.pageSize);
  }

  openProductDetails(product: Product) {
    this.dialog.open(SaleDetailsComponent, {
      width: '600px',
      data: product
    });
  }

  private getProducts(start: number, end: number) {
    this.subscription.add(this.saleService.getProducts({start, end}).subscribe(products => {
      this.paginatedItems = products;
    }));
  }
}
