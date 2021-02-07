import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteButtonsComponent } from './vote-buttons.component';

describe('VoteButtonsComponent', () => {
  let component: VoteButtonsComponent;
  let fixture: ComponentFixture<VoteButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.artist = {
      name: 'Kanye West',
      time: '1 month ago',
      magazine: 'Entertainment',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      type: 'kanye',
      positive: 1,
      negative: 0,
      percentagePositive: 0,
      percentageNegative: 0,
      vote: false
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return percentagePositive in 100', () => {
    component.calculatePercentage(component.artist);
    expect(component.artist.percentagePositive).toBe(100);
  });

  it('It should turn positive variable to true one, also negative one to false', () => {
    component.votedThumb(true);
    expect(component.positive).toBeTruthy();
    expect(component.negative).toBeFalsy();
  });

  it('It should turn negative variable to true one, also positive one to false', () => {
    component.votedThumb(false);
    expect(component.negative).toBeTruthy();
    expect(component.positive).toBeFalsy();
  });
});
