import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieResponse, IMovie, IMDBConfig } from '../utils/models';
import { HttpBaseService } from './http-base.service';

@Injectable({ providedIn: 'root' })
export class MovieApiService {
  baseApiUrl = environment.tmdbBaseUrl;
  popularMoviesUrl = `${this.baseApiUrl}/movie/popular`;
  configurationUrl = `${this.baseApiUrl}/configuration`;
  topRatedUrl = `${this.baseApiUrl}/movie/top_rated`;

  constructor(private httpApiBase: HttpBaseService) {}

  getPopularMovies$(): Observable<IMovie[]> {
    return this.httpApiBase
      .get<IMovieResponse>(this.popularMoviesUrl)
      .pipe(
        map((response: IMovieResponse) => (response.results as IMovie[]) || [])
      );
  }

  getTopRatesMovies$(): Observable<IMovie[]> {
    return this.httpApiBase
      .get<IMovieResponse>(this.topRatedUrl)
      .pipe(
        map((response: IMovieResponse) => (response.results as IMovie[]) || [])
      );
  }

  getConfigs$(): Observable<IMDBConfig> {
    return this.httpApiBase
      .get<IMDBConfig>(this.configurationUrl)
      .pipe(shareReplay(1));
  }
}
