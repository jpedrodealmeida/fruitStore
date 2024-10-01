import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleListComponent } from './pages/sale-list/sale-list.component';
import { saleResolver } from './sale.resolver';
import { SaleDetailsComponent } from './modal/sale-details/sale-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: SaleListComponent,
  },
  //  {
  //    path: 'details/:id',
  //    component: SaleDetailsComponent,
  //    resolve: { products: saleResolver}
  //  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
