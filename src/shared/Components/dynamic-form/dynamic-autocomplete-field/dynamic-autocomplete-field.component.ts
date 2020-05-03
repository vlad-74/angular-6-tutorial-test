import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { merge } from 'rxjs/observable/merge';


@Component({
  selector: 'cc-dynamic-autocomplete-field',
  templateUrl: './dynamic-autocomplete-field.component.html',
  styleUrls: ['./dynamic-autocomplete-field.component.scss']
})
export class DynamicAutocompleteFieldComponent extends DynamicFieldClass implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  filteredOptions: Observable<{ value: any; name: any }[]>;
  focus$ = new Subject();

  ngOnInit() {
    this.filteredOptions = merge(this.field.control.valueChanges, this.focus$)
      .pipe(
        startWith(this.field.control.value),
        map(val => this.filter(val))
      );
  }

  filter(val): { value: any; name: any }[] {
    if (val && val.length > 2) {
    return this.field.options.filter(option =>
      option.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    }
  }

  onFocus() {
    this.focus$.next(this.field.control.value);
  }

  ngOnDestroy() {
    this.focus$.unsubscribe();
  }
}
