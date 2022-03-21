import { Injectable } from '@angular/core';
import { CommonUtility } from '../../core/utils/common';
import { Constants } from '../../core/utils/constants';
import { IMovie } from '../../core/utils/models';
import { IProductCard } from '..';
import { MovieApiService } from 'src/app/core/services/movie-api.service';
import { map, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {
  imageSize = Constants.imageSizes.W300;

  constructor(private moviesApiService: MovieApiService) {}

  popularMovies$: Observable<IProductCard[]> = this.moviesApiService
    .getPopularMovies$()
    .pipe(map((movies) => movies.map((movie) => this.movieMapperFn(movie))));

  movieMapperFn(movie: IMovie): IProductCard {
    const movieCard: IProductCard = {
      name: movie.original_title,
      imageUrl: CommonUtility.getFullImagePath(
        this.imageSize,
        movie.poster_path
      ),
      ratings: movie.vote_average,
      genres: movie.genre_ids,
      releaseDate: movie.release_date,
    };
    return movieCard;
  }
}
