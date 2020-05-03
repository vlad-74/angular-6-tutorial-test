import { Component, OnInit } from '@angular/core';
import { DynamicFieldClass } from '../../../Models/Abstract/dynamicField.class';

@Component({
  selector: 'cc-dynamic-password-field',
  templateUrl: './dynamic-password-field.component.html',
  styleUrls: ['./dynamic-password-field.component.scss']
})

export class DynamicPasswordFieldComponent extends DynamicFieldClass implements OnInit {
  public type = 'password';

  constructor() {
    super();
  }

  showPsw(flag: boolean) {
    flag ? this.type = 'text' : this.type = 'password';
  }

  ngOnInit() {
  }
}
