import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksRoutingModule } from './how-it-works.routing';
import { HowItWorksComponent } from './how-it-works.component';



@NgModule({
  declarations: [HowItWorksComponent],
  imports: [
    CommonModule,
    HowItWorksRoutingModule
  ],
  exports: [HowItWorksComponent]
})
export class HowItWorksModule { }
