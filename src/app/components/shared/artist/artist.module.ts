import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist.component';
import { VoteButtonsModule } from '../vote-buttons/vote-buttons.module';
import { AlertModule } from '../alert/alert.module';



@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule,
    VoteButtonsModule,
    AlertModule
  ],
  exports: [ArtistComponent]
})
export class ArtistModule { }
