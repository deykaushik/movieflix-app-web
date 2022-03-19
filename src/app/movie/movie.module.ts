import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [{ path: '', component: MovieCategoryComponent }];

@NgModule({
  declarations: [MovieCategoryComponent, MovieDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieModule {}
