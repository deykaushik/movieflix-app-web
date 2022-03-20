import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies.routing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieService } from './movie.service';

@NgModule({
  imports: [CommonModule, MoviesRoutingModule, HttpClientModule, SharedModule],
  declarations: [PopularMoviesComponent],
  providers: [MovieService],
})
export class MoviesModule {}