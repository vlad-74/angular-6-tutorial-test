import { Component, Input, OnInit } from '@angular/core';
import { IGroupFieldModel } from '../../../Models/Abstract/groupFieldModel.inteface';
import { FormGroup } from '@angular/forms';
import { FormState } from '../../../Models/Abstract/formState.interface';

@Component({
  selector: 'cc-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss']
})
export class DynamicGroupComponent implements OnInit {
  @Input()
  group: IGroupFieldModel;

  @Input()
  form: FormGroup;

  @Input()
  state: FormState;
  constructor() { }

  changeFlag(flag: boolean) {
    this.group.selectable.isFieldSelected = flag;
    this.group.selectable.onFieldSelectChange(flag);
  }
  ngOnInit() {
  }

}
