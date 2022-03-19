import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[accordian-content]',
})
export class AccordianContentDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({
  selector: 'ng-template[accordian-title]',
})
export class AccordianTitleDirective {
  constructor(public template: TemplateRef<any>) {}
}
