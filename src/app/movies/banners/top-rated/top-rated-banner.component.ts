import { Component, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { MovieService } from 'src/app/shared';

@Component({
  selector: 'app-top-rated-banner',
  templateUrl: './top-rated-banner.component.html',
  styles: [],
})
export class TopRatedBannerComponent implements OnInit {
  private destroy$ = new Subject<void>();

  constructor(private movieService: MovieService) {}

  topRatedMovies$ = this.movieService.topRatedMovies$.pipe(
    takeUntil(this.destroy$),
    map((movies) =>
      movies.map((movie) => this.movieService.movieMapperFn(movie))
    )
  );

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
