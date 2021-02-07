import { Component, OnInit } from '@angular/core';

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
      positive: 1,
      negative: 1,
      percentagePositive: 36,
      percentageNegative: 64,
      vote: false
    },
    {
      name: 'Mark Zuckerberg',
      time: '1 month ago',
      magazine: 'Business',
      description: 'Thank you for voting!',
      type: 'mark',
      positive: 1,
      negative: 1,
      percentagePositive: 64,
      percentageNegative: 36,
      vote: false
    },
    {
      name: 'Cristina Fernández de Kirchner',
      time: '1 month ago',
      magazine: 'Politics',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      type: 'cristina',
      positive: 1,
      negative: 1,
      percentagePositive: 36,
      percentageNegative: 64,
      vote: false
    },
    {
      name: 'Malala Yousafzai',
      time: '1 month ago',
      magazine: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      type: 'malala',
      positive: 1,
      negative: 1,
      percentagePositive: 36,
      percentageNegative: 64,
      vote: false
    }
  ];
  alert = false;

  constructor() { }

  ngOnInit(): void {
  }

}
