import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { }

  saveArtist(artist) {
    localStorage.setItem('artist', JSON.stringify(artist));
  }
}
