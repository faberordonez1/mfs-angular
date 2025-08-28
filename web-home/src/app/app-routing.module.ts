import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MnComponent } from './mn/mn.component';

const routes: Routes = [
  {
    path: '',
    component: MnComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'recargas',
    loadChildren: () =>
      // @ts-ignore
      import('web_recargas/RecargasModule').then((m) => m.RecargasModule)
  },
  {
    path: 'apuestas',
    loadChildren: () =>
      // @ts-ignore
      import('web_apuestas/ApuestasModule').then((m) => m.ApuestasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
