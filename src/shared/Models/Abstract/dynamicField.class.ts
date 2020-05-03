import { IFieldModel } from './fieldModel.interface';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormState } from './formState.interface';

export abstract class DynamicFieldClass {
  @Input()
  form: FormGroup;

  @Input()
  field: IFieldModel;

  @Input()
  state: FormState;

  public isInvalid() {
    const formControl = this.field.control;
    return this.state.submitted && formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
