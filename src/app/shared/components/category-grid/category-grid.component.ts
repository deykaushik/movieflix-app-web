import { Component, Input, OnInit } from '@angular/core';
import { IProductCard } from '../product-card/product-card.component';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss'],
})
export class CategoryGridComponent implements OnInit {
  @Input() categoryItems: IProductCard[] = [];
  @Input() listView = false;

  constructor() {}

  ngOnInit(): void {}
}
