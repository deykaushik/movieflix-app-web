import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBannerComponent } from './popular-banner.component';

describe('PopularBannerComponent', () => {
  let component: PopularBannerComponent;
  let fixture: ComponentFixture<PopularBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
