import { Component, OnInit } from '@angular/core';
import { map, reduce, Subject, take, takeUntil } from 'rxjs';
import { IProductCard, MovieService } from 'src/app/shared';

@Component({
  selector: 'app-popular-banner',
  templateUrl: './popular-banner.component.html',
  styles: [],
})
export class PopularBannerComponent implements OnInit {
  private destroy$ = new Subject<void>();

  constructor(private movieService: MovieService) {}

  popularMovies$ = this.movieService.popularMovies$.pipe(
    takeUntil(this.destroy$)
  );

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
