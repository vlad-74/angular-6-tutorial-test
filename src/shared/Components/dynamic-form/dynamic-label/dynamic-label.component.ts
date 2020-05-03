import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-label',
  templateUrl: './dynamic-label.component.html',
  styleUrls: ['./dynamic-label.component.scss']
})
export class DynamicLabelComponent extends DynamicFieldClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
