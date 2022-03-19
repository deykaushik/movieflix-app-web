import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class RadioGroupService {
  nameSubject = new ReplaySubject<string>(1);
  valueSubject = new ReplaySubject<string>(1);
  valueChange$ = this.valueSubject.asObservable();
  nameChange$ = this.nameSubject.asObservable();

  updateName(name: string) {
    this.nameSubject.next(name);
  }

  updateValue(value: string) {
    this.valueSubject.next(value);
  }
}
