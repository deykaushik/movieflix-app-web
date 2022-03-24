import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedBannerComponent } from './top-rated-banner.component';

describe('TopRatedBannerComponent', () => {
  let component: TopRatedBannerComponent;
  let fixture: ComponentFixture<TopRatedBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
