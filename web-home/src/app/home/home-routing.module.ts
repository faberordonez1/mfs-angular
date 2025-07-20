import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContComponent } from './cont/cont.component';

const routes: Routes = [{ path: '', component: ContComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
