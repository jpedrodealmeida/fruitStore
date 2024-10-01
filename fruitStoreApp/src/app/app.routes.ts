import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sale',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'sale',
    pathMatch: 'full'
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then(module => module.SaleModule)
  }
];
