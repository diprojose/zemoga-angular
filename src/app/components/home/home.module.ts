import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HeaderModule } from '../shared/header/header.module';
import { NewsletterModule } from '../shared/newsletter/newsletter.module';
import { ArtistModule } from '../shared/artist/artist.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MessageModule } from '../shared/message/message.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    NewsletterModule,
    ArtistModule,
    FooterModule,
    MessageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
