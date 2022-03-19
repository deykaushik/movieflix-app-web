import {
  Component,
  Directive,
  ElementRef,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { RadioGroupService } from './radio-group.service';

@Directive({
  selector: '[app-radio]',
})
export class RadioComponent implements OnInit {
  @Input() groupName!: string;
  @Input() isChecked = false;
  @Input() value!: string;
  @Input() isDisabled = false;

  constructor(
    private elemRef: ElementRef,
    private ngZone: NgZone,
    private radioGroupService: RadioGroupService
  ) {}

  radioClickEvent$ = fromEvent(this.elemRef.nativeElement, 'click');

  ngOnInit(): void {
    this.initNameChangeListner();
    this.initRadioClickListner();
  }

  initRadioClickListner() {
    this.ngZone.runOutsideAngular(() => {
      this.radioClickEvent$.subscribe(() => {
        if (!this.isDisabled) {
          this.ngZone.run(() => this.radioGroupService.updateValue(this.value));
        }
      });
    });
  }

  initNameChangeListner() {
    this.radioGroupService.nameChange$
      .pipe(tap((name) => console.log(name)))
      .subscribe((name: string) => (this.groupName = name));
  }
}
