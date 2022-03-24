import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, reduce, Subject, take, takeUntil, tap } from 'rxjs';
import { IProductCard, MovieService } from 'src/app/shared';

@Component({
  selector: 'app-popular-banner',
  templateUrl: './popular-banner.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [],
})
export class PopularBannerComponent implements OnInit {
  private destroy$ = new Subject<void>();

  constructor(private movieService: MovieService) {}

  popularMovies$ = this.movieService.popularMovies$.pipe(
    takeUntil(this.destroy$),
    tap((movies) => console.log(movies)),
    map((movies) =>
      movies.sort((first, second) => second.vote_average - first.vote_average)
    ),
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
