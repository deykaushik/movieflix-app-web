import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AccordianService {
  stateChangeSubject = new Subject<boolean>();
  stateChange$ = this.stateChangeSubject.asObservable();

  updateState(state: boolean) {
    this.stateChangeSubject.next(state);
  }
}
