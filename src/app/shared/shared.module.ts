import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from './controls/select/select.module';
import { DatepickerModule } from './controls/datepicker/datepicker.module';
import { AccordianModule } from './controls/accordian/accordian.module';

const SharedControlModules = [SelectModule, DatepickerModule, AccordianModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...SharedControlModules],
  exports: [...SharedControlModules],
})
export class SharedModule {}
