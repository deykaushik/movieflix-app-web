import { Component, Input, OnInit } from '@angular/core';
import { IProductCard } from '../product-card/product-card.component';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
})
export class CategoryGridComponent implements OnInit {
  @Input() categoryItems?: IProductCard[] | null;
  @Input() listView = false;

  constructor() {}

  ngOnInit(): void {}
}
