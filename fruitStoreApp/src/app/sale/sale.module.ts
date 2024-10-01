import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleListComponent } from './pages/sale-list/sale-list.component';
import { SharedModule } from '../shared/shared.module';
import { SaleDetailsComponent } from './modal/sale-details/sale-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';


@NgModule({
  declarations: [SaleListComponent, SaleDetailsComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    SharedModule
  ]
})
export class SaleModule { }
