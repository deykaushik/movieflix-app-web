import { Component, Input, OnInit } from '@angular/core';

export interface IProductCard {
  name: string;
  imageUrl: string;
  ratings: number;
  genres: string[] | number[];
  releaseDate: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProductCard;

  constructor() {}

  ngOnInit(): void {}
}
