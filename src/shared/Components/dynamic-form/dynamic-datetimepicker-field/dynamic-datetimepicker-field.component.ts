import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

export {
  DynamicDatetimepickerValueaccessorComponent
} from './dynamic-datetimepicker-valueaccessor/dynamic-datetimepicker-valueaccessor.component';

@Component({
  selector: 'cc-dynamic-datetimepicker-field',
  templateUrl: './dynamic-datetimepicker-field.component.html',
  styleUrls: ['./dynamic-datetimepicker-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicDatetimepickerFieldComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
