import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  {
    path: 'recharges', 
    loadChildren: () => import('./features/recharge/recharge.routes').then(m => m.RECHARGE_ROUTES)
  }
];
