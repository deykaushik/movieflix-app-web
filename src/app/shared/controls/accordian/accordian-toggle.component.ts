import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { AccordianComponent } from './accordian.component';

@Directive({
  selector: '[accordian-toggle]',
})
export class AccordianToggleDirective implements AfterViewInit, OnDestroy {
  private destroy = new Subject<void>();
  @Input('accordian') accordian!: AccordianComponent;

  constructor(private elemRef: ElementRef, private ngZone: NgZone) {}

  toggleClickEvent$ = fromEvent(this.elemRef.nativeElement, 'click').pipe(
    takeUntil(this.destroy)
  );

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.toggleClickEvent$.subscribe(() => {
        if (!this.accordian.isDisabled) {
          this.ngZone.run(() =>
            this.accordian.updateState(!this.accordian.isOpen)
          );
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
