import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/data/movie.data';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styles: [],
})
export class MovieCategoryComponent implements OnInit {
  genresList = MovieData.genres['genres'];

  constructor() {}

  ngOnInit(): void {
    console.log(this.genresList);
  }

  onRadioSelection(value: string) {
    console.log(value);
  }
}
