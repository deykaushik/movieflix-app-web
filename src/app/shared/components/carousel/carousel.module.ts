import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselComponent } from './carousel.component';

const CarouselComponents: any[] = [CarouselComponent, CarouselItemDirective];

@NgModule({
  declarations: [...CarouselComponents],
  imports: [CommonModule, SwiperModule],
  exports: [SwiperModule, ...CarouselComponents],
})
export class CarouselModule {}
