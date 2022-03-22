import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesLandingComponent } from './movies-landing/movies-landing.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  { path: '', component: MoviesLandingComponent },
  { path: 'popular', component: PopularMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
