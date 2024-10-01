import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrl: './sale-details.component.scss'
})
export class SaleDetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}
}
