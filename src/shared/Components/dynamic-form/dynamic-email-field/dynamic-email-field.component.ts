import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-email-field',
  templateUrl: './dynamic-email-field.component.html',
  styleUrls: ['./dynamic-email-field.component.scss']
})
export class DynamicEmailFieldComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }


}
