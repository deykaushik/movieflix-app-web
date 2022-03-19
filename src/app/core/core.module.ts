import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const CoreComponents: any[] = [HeaderComponent];

@NgModule({
  declarations: [...CoreComponents],
  imports: [CommonModule],
  exports: [...CoreComponents],
})
export class CoreModule {}
