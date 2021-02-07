import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})
export class VoteButtonsComponent implements OnInit {

  @Input() voted = false;
  @Input() artist;
  @Output() result = new EventEmitter<any>();
  positive = false;
  negative = false;
  answer;

  constructor() { }

  ngOnInit(): void {
  }

  votedThumb(vote) {
    this.positive = vote === true ? true : false;
    this.negative = vote === false ? true : false;
    this.answer = vote;
  }

  executeVote() {
    this.artist.vote = true;
    if (this.answer) {
      this.artist.positive = this.artist.positive + 1;
    } else {
      this.artist.negative = this.artist.negative + 1;
    }
    this.calculatePercentage(this.artist);
    this.result.emit(this.artist);
  }

  voteAgain() {
    this.artist.vote = false;
    this.result.emit(this.artist);
  }

  calculatePercentage(artist) {
    const numberPositive = artist.positive;
    const numberNegative = artist.negative;
    const totalPercent = artist.positive + artist.negative;
    const percentagePositive = (numberPositive / totalPercent) * 100;
    const percentageNegative = (numberNegative / totalPercent) * 100;
    this.artist.percentagePositive = Math.round(percentagePositive);
    this.artist.percentageNegative = Math.round(percentageNegative);
  }

}
