import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastTrialsRoutingModule } from './past-trials.routing';
import { PastTrialsComponent } from './past-trials.component';



@NgModule({
  declarations: [PastTrialsComponent],
  imports: [
    CommonModule,
    PastTrialsRoutingModule
  ],
  exports: [PastTrialsComponent]
})
export class PastTrialsModule { }
