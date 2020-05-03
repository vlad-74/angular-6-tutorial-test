import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-datepicker-field',
  templateUrl: './dynamic-datepicker-field.component.html',
  styleUrls: ['./dynamic-datepicker-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicDatepickerFieldComponent extends DynamicFieldClass implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
