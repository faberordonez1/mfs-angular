import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  {
    path: 'bets', 
    loadChildren: () => import('./features/bets/bets.routes').then(m => m.BETS_ROUTES)
  }
];
