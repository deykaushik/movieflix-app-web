import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianModule, RadioGroupModule } from './controls';
import {
  CategoryGridComponent,
  PageContainerComponent,
  ProductCardComponent,
} from './components';

const SharedControlModules = [AccordianModule, RadioGroupModule];
const SharedComponents = [
  CategoryGridComponent,
  ProductCardComponent,
  PageContainerComponent,
];

@NgModule({
  declarations: [...SharedComponents],
  imports: [CommonModule, ...SharedControlModules],
  exports: [...SharedControlModules, ...SharedComponents],
})
export class SharedModule {}
