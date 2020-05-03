import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-input-field',
  templateUrl: './dynamic-input-field.component.html',
  styleUrls: ['./dynamic-input-field.component.scss']
})
export class DynamicInputFormComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }


}
