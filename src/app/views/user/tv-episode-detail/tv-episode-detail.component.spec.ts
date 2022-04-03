import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodeDetailComponent } from './tv-episode-detail.component';

describe('TvEpisodeDetailComponent', () => {
  let component: TvEpisodeDetailComponent;
  let fixture: ComponentFixture<TvEpisodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvEpisodeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvEpisodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
