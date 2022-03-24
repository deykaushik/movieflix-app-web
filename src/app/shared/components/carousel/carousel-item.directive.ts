import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: 'ng-template[carousel-item]' })
export class CarouselItemDirective {
  constructor(public template: TemplateRef<any>) {}
}
