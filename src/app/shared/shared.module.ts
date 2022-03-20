import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianModule, RadioGroupModule } from './controls';
import { CategoryGridComponent, ProductCardComponent } from './components';

const SharedControlModules = [AccordianModule, RadioGroupModule];
const SharedComponents = [CategoryGridComponent, ProductCardComponent];

@NgModule({
  declarations: [...SharedComponents],
  imports: [CommonModule, ...SharedControlModules],
  exports: [...SharedControlModules, ...SharedComponents],
})
export class SharedModule {}
