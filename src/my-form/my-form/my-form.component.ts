import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  public assessmentForm: FormGroup;
  public fields: Array<any> = [];
  public fromDate = new Date().getTime();

  constructor() { }

  ngOnInit() {
    this.initFields();
  }

  initFields() {
    const monthEarlier = moment().subtract(1, 'months').format('YYYY-MM-DD');

    this.fields = [
      {
        control: new FormControl(monthEarlier, []),
        fieldName: 'from',
        name: 'from',
        controlType: 'date',
        label: 'c',
        placeholder: 'Выберите дату'
      },
      {
        control: new FormControl(new Date(this.fromDate), []),
        fieldName: 'to',
        name: 'to',
        controlType: 'date',
        label: 'по',
        placeholder: 'Выберите дату',
        classList: ['periodEnd']
      },
    ];

    this.assessmentForm = new FormGroup(this.fields.reduce((group, field) => {
      group[field.fieldName] = field.control;
      return group;
    }, {}));

  }
}