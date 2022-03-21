import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianModule, RadioGroupModule } from './controls';
import { CategoryGridComponent, ProductCardComponent } from './components';
import { PageContainerComponent } from './components/page-container/page-container.component';

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
