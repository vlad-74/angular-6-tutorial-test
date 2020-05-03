import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-select-field',
  templateUrl: './dynamic-select-field.component.html',
  styleUrls: ['./dynamic-select-field.component.scss']
})
export class DynamicSelectFieldComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
