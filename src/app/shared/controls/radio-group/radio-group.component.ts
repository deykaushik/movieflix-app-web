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
  selector: '[app-radio-group]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./radio-group.component.scss'],
  host: {
    class: 'radio-group',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [RadioGroupService],
})
export class RadioGroupComponent implements OnInit, OnChanges {
  @Input() groupName!: string;
  @Output() onSelection = new EventEmitter<string>();

  constructor(private radioGroupService: RadioGroupService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { groupName } = changes;
    if (groupName) {
      this.radioGroupService.updateName(groupName.currentValue);
    }
  }

  ngOnInit(): void {
    this.radioGroupService.valueChange$.subscribe((value) =>
      this.onSelection.next(value)
    );
  }
}
