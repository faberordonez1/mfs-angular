import { Routes } from '@angular/router';
import { BetsComponent } from './bets.component';

export const BETS_ROUTES: Routes = [
  { path: '', component: BetsComponent },
  { 
    path: 'historial', 
    loadComponent: () => import('./bets-history.component').then(m => m.BetsHistoryComponent) 
  }
];
