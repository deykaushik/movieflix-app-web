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
  originalImageSize = Constants.imageSizes.ORIGINAL;

  constructor(private moviesApiService: MovieApiService) {}

  popularMovies$: Observable<IMovie[]> =
    this.moviesApiService.getPopularMovies$();

  topRatedMovies$: Observable<IMovie[]> =
    this.moviesApiService.getTopRatesMovies$();

  movieMapperFn(movie: IMovie): IProductCard {
    const movieCard: IProductCard = {
      id: movie.id,
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
