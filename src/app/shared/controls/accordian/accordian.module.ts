import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian.component';
import {
  AccordianContentDirective,
  AccordianTitleDirective,
} from './accordian.directives';
import { AccordianToggleDirective } from './accordian-toggle.component';

const AccordianComponents = [
  AccordianComponent,
  AccordianContentDirective,
  AccordianTitleDirective,
  AccordianToggleDirective,
];

@NgModule({
  declarations: [...AccordianComponents],
  imports: [CommonModule],
  exports: [...AccordianComponents],
})
export class AccordianModule {}
