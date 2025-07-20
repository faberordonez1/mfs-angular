import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApuestasRoutingModule } from './apuestas-routing.module';
import { ContComponent } from './cont/cont.component';

@NgModule({
  declarations: [ContComponent],
  imports: [CommonModule, ApuestasRoutingModule]
})
export class ApuestasModule {}
