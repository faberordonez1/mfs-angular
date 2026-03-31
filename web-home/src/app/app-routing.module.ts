import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MnComponent } from './mn/mn.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

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
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'web_recargas',
        exposedModule: './RecargasModule'
      }).then((m) => m.RecargasModule)
  },
  {
    path: 'apuestas',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'web_apuestas',
        exposedModule: './ApuestasModule'
      }).then((m) => m.ApuestasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
