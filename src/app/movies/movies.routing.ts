import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full' },
  { path: 'popular', component: PopularMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
