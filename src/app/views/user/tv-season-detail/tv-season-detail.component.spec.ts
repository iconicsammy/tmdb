import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeasonDetailComponent } from './tv-season-detail.component';

describe('TvSeasonDetailComponent', () => {
  let component: TvSeasonDetailComponent;
  let fixture: ComponentFixture<TvSeasonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeasonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
