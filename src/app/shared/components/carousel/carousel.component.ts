import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { pipe, Subject, takeUntil } from 'rxjs';
// import Swiper core and required modules
import SwiperCore, { Pagination, Swiper } from 'swiper';
import { CarouselItemDirective } from './carousel-item.directive';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterContentInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() carouselItems!: any[];
  @ContentChild(CarouselItemDirective, { read: TemplateRef })
  carouselItemsTemp!: TemplateRef<CarouselItemDirective>;
  swiper!: SwiperCore;
  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.ngZone.onStable
      .asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.swiper = new Swiper('.swiper', {
          slidesPerView: 5,
          spaceBetween: 30,
        });
      });
  }

  ngOnDestroy(): void {
    this.swiper && this.swiper.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
