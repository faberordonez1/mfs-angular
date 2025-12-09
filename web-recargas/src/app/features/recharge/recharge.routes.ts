import { Routes } from '@angular/router';
import { RechargeComponent } from './recharge.component';

export const RECHARGE_ROUTES: Routes = [
  { path: '', component: RechargeComponent },
  { 
    path: 'actividad', 
    loadComponent: () => import('./recharge-activity.component').then(m => m.RechargeActivityComponent) 
  }
];
