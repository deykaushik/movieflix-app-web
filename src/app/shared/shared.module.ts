import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from './controls/select/select.module';
import { AccordianModule } from './controls/accordian/accordian.module';
import { RadioGroupModule } from './controls/radio-group/radio-group.module';

const SharedControlModules = [SelectModule, AccordianModule, RadioGroupModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...SharedControlModules],
  exports: [...SharedControlModules],
})
export class SharedModule {}
