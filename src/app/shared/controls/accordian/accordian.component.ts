import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { collapseMotion } from 'src/app/core/animations/collapse';
import {
  AccordianContentDirective,
  AccordianTitleDirective,
} from './accordian.directives';
import { AccordianService } from './accordian.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./accordian.component.scss'],
  host: {
    class: 'accordian',
  },
  providers: [AccordianService],
  exportAs: 'appAccordian',
  animations: [collapseMotion],
})
export class AccordianComponent implements OnInit {
  @Input() isOpen?: boolean;
  @Input() title?: string;
  @Input() isDisabled?: boolean;
  @Output() stateChange = new EventEmitter<boolean>();

  @ContentChild(AccordianContentDirective, { read: TemplateRef })
  accordianContentTemp!: TemplateRef<any>;

  @ContentChild(AccordianTitleDirective, { read: TemplateRef })
  accrodianTitleTemp?: TemplateRef<any>;

  constructor(
    private accordianService: AccordianService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initStateChangeListener();
  }

  initStateChangeListener() {
    this.accordianService.stateChange$.subscribe((state: boolean) => {
      this.isOpen = state;
      this.cdr.markForCheck();
    });
  }

  updateState(state: boolean) {
    this.accordianService.updateState(state);
    this.stateChange.next(state);
  }
}
