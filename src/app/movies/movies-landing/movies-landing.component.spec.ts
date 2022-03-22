import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLandingComponent } from './movies-landing.component';

describe('MoviesLandingComponent', () => {
  let component: MoviesLandingComponent;
  let fixture: ComponentFixture<MoviesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
