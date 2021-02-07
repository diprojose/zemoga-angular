import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteButtonsComponent } from './vote-buttons.component';



@NgModule({
  declarations: [VoteButtonsComponent],
  imports: [
    CommonModule
  ],
  exports: [VoteButtonsComponent]
})
export class VoteButtonsModule { }
