import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { MovieService } from '../../shared/services/movie.service';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styles: [],
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private movieService: MovieService) {}

  popularMovies$ = this.movieService.popularMovies$.pipe(
    takeUntil(this.destroy$),
    map((movies) =>
      movies.map((movie) => this.movieService.movieMapperFn(movie))
    ),
  );

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
