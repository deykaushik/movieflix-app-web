import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies.routing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MoviesLandingComponent } from './movies-landing/movies-landing.component';
import { PopularBannerComponent } from './popular-banner/popular-banner.component';

@NgModule({
  imports: [CommonModule, MoviesRoutingModule, HttpClientModule, SharedModule],
  declarations: [
    PopularMoviesComponent,
    MoviesLandingComponent,
    PopularBannerComponent,
  ],
})
export class MoviesModule {}
