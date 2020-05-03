import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-checkbox-field',
  templateUrl: './dynamic-checkbox-field.component.html',
  styleUrls: ['./dynamic-checkbox-field.component.scss']
})
export class DynamicCheckboxFieldComponent extends DynamicFieldClass  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
