import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from './radio.component';

const RadioGroupComponents = [RadioGroupComponent, RadioComponent];

@NgModule({
  declarations: [...RadioGroupComponents],
  imports: [CommonModule],
  exports: [...RadioGroupComponents],
})
export class RadioGroupModule {}
