import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotetakerComponent } from './notetaker.component';

describe('NotetakerComponent', () => {
  let component: NotetakerComponent;
  let fixture: ComponentFixture<NotetakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotetakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotetakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
