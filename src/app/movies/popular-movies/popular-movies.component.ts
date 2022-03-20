import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subject, takeUntil } from 'rxjs';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { IProductCard } from 'src/app/shared';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styles: [],
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  popularMovies$:Observable<IProductCard[]> = this.moviesApiService.getPopularMovies$().pipe(
    takeUntil(this.destroy$),
    map((movies) =>
      movies.map((movie) => this.movieService.movieMapperFn(movie))
    )
  );

  constructor(
    private moviesApiService: MovieApiService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.popularMovies$.subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
