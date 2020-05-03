import { Component, Input, OnInit } from '@angular/core';
import { FieldTypes } from '../../../Models/Const/FieldTypes.enum';

@Component({
  selector: 'cc-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss']
})
export class DynamicErrorComponent implements OnInit {
  public FieldTypes = FieldTypes;

  @Input()
  errors;

  @Input()
  fieldType;

  constructor() { }

  ngOnInit() {
  }

}
