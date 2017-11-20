import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterTrendingComponent } from './twitter-trending.component';

describe('TwitterTrendingComponent', () => {
  let component: TwitterTrendingComponent;
  let fixture: ComponentFixture<TwitterTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
