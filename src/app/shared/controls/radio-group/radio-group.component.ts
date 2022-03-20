import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { RadioGroupService } from './radio-group.service';

@Component({
  selector: 'app-radio-group',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./radio-group.component.scss'],
  host: {
    class: 'radio-group',
    '[class.horizontal]': "alignment === 'horizontal'",
    '[class.vertical]': "alignment === 'vertical'",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [RadioGroupService],
})
export class RadioGroupComponent implements OnInit, OnChanges {
  @Input() radioGroupName!: string;
  @Input() alignment: 'horizontal' | 'vertical' = 'horizontal';
  @Output() onSelection = new EventEmitter<string>();

  constructor(private radioGroupService: RadioGroupService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { radioGroupName } = changes;
    if (radioGroupName) {
      this.radioGroupService.updateName(radioGroupName.currentValue);
    }
  }

  ngOnInit(): void {
    this.radioGroupService.valueChange$.subscribe((value) => {
      this.onSelection.next(value);
    });
  }
}
