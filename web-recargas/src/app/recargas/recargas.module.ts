import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecargasRoutingModule } from './recargas-routing.module';
import { ContComponent } from './cont/cont.component';

@NgModule({
  declarations: [ContComponent],
  imports: [CommonModule, RecargasRoutingModule]
})
export class RecargasModule {}
