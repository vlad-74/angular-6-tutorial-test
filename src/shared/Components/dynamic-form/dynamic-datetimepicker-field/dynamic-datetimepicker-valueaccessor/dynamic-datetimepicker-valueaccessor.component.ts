import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DynamicFieldClass } from '../../../../Models/Abstract/dynamicField.class';
import * as moment from 'moment';

enum PICKER_ACTIONS {
  DATE_UPDATE,
  HOUR_UPDATE,
  MINUTES_UPDATE
}

@Component({
  selector: 'cc-dynamic-datetimepicker-valueaccessor',
  templateUrl: './dynamic-datetimepicker-valueaccessor.component.html',
  styleUrls: ['./dynamic-datetimepicker-valueaccessor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicDatetimepickerValueaccessorComponent),
      multi: true
    }
  ]
})
export class DynamicDatetimepickerValueaccessorComponent extends DynamicFieldClass implements OnInit, ControlValueAccessor {
  onChange: (_: any) => void;
  onTouched: () => void;

  ACTIONS = PICKER_ACTIONS;
  hours = [];
  minutes = [];

  selectedDate;
  selectedHour;
  selectedMinutes;

  writeValue(value) {
    this.selectedDate = moment(value).second(0).millisecond(0);
    this.selectedHour = moment(value).hour();
    this.selectedMinutes = moment(value).minute();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onValuChange(action) {
    switch (action) {
      case PICKER_ACTIONS.DATE_UPDATE:
        this.selectedDate
          .hour(this.selectedHour)
          .minute(this.selectedMinutes)
          .second(moment().second());
        break;
      case PICKER_ACTIONS.HOUR_UPDATE:
        this.selectedDate
          .hour(this.selectedHour);
        break;
      case PICKER_ACTIONS.MINUTES_UPDATE:
        this.selectedDate
          .minute(this.selectedMinutes);
        break;
    }
    this.onChange(this.selectedDate.format('YYYY-MM-DDTHH:mm:ss'));
  }

  constructor() {
    super();
  }

  ngOnInit() {
    for (let i = 0; i < 60; i++) {
      if (i < 24) {
        this.hours.push(i);
      }
      this.minutes.push(i);
    }
  }

}
