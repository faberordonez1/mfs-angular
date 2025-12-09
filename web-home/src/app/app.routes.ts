import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: 'apuestas',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.remotes.web_apuestas}/remoteEntry.js`,
        exposedModule: './Routes',
      }).then(m => m.routes),
  },
  {
    path: 'recargas',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${environment.remotes.web_recargas}/remoteEntry.js`,
        exposedModule: './Routes',
      }).then(m => m.routes),
  },
  { path: '', component: HomeComponent }
];
