import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-number-field',
  templateUrl: './dynamic-number-field.component.html',
  styleUrls: ['./dynamic-number-field.component.scss']
})
export class DynamicNumberFieldComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
