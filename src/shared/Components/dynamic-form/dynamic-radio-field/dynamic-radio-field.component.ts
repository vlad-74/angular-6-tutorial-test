import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-radio-field',
  templateUrl: './dynamic-radio-field.component.html',
  styleUrls: ['./dynamic-radio-field.component.scss']
})
export class DynamicRadioFieldComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
