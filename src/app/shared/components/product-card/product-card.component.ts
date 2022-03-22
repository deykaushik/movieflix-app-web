import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

export interface IProductCard {
  id: number;
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProductCard;

  constructor() {}

  ngOnInit(): void {}
}
