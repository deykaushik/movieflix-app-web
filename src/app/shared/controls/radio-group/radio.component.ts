import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import { fromEvent, tap } from 'rxjs';
import { RadioGroupService } from './radio-group.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  host: {
    class: 'radio-item',
    '[class.checked]': 'isChecked',
    '[class.disabled]': 'isDisabled',
    '[attr.name]': 'groupName',
  },
})
export class RadioComponent implements OnInit {
  @Input() radioGroupName!: string;
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
    this.initValueChangeListner();
  }

  initValueChangeListner() {
    this.radioGroupService.valueChange$.subscribe((value) => {
      this.isChecked = this.value === value;
    });
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
    this.radioGroupService.nameChange$.subscribe(
      (name: string) => (this.radioGroupName = name)
    );
  }
}
