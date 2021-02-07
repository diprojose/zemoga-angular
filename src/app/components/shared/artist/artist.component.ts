import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../../services/artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artists = [
    {
      name: 'Kanye West',
      time: '1 month ago',
      magazine: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      type: 'kanye',
      positive: 0,
      negative: 0,
      percentagePositive: 0,
      percentageNegative: 0,
      vote: false
    },
    {
      name: 'Mark Zuckerberg',
      time: '1 month ago',
      magazine: 'Business',
      description: 'Thank you for voting!',
      type: 'mark',
      positive: 0,
      negative: 0,
      percentagePositive: 0,
      percentageNegative: 0,
      vote: false
    },
    {
      name: 'Cristina Fernández de Kirchner',
      time: '1 month ago',
      magazine: 'Politics',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      type: 'cristina',
      positive: 0,
      negative: 0,
      percentagePositive: 0,
      percentageNegative: 0,
      vote: false
    },
    {
      name: 'Malala Yousafzai',
      time: '1 month ago',
      magazine: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      type: 'malala',
      positive: 0,
      negative: 0,
      percentagePositive: 0,
      percentageNegative: 0,
      vote: false
    }
  ];
  alert = false;

  constructor(private artistServices: ArtistsService) { }

  ngOnInit(): void {
    const local = localStorage.getItem('artist');
    this.artists = local === null ? this.artists : JSON.parse(local);
    console.log('this.artists', this.artists);
  }

  vote(artist) {
    if (artist.vote) {
      this.alertEvents(true);
    }
    this.artistServices.saveArtist(this.artists);
  }

  alertEvents(alert) {
    this.alert = alert;
  }

}
