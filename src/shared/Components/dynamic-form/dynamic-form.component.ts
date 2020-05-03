import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFieldModel } from '../../Models/Abstract/fieldModel.interface';
import { FormState } from '../../Models/Abstract/formState.interface';

@Component({
  selector: 'cc-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit {

  @Input()
  fields: Array<IFieldModel>;

  @Input()
  form: FormGroup;

  @Input()
  state: FormState;

  constructor() {
  }

  ngOnInit() {
  }

}
