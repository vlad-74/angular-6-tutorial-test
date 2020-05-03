import { FormControl, Validators} from '@angular/forms';
import { LabelModal } from '../Const/LabelModal.enum.class';

export class ModalField {
  control: FormControl;
  fieldName: string;
  name: string;
  controlType: string;
  label: string;
  options?: Array<{ value, name }>;

  constructor(name: string) {
    this.control = new FormControl('', [Validators.required] );
    this.fieldName = name;
    this.name = name;
    this.controlType = 'text';
    this.label = LabelModal[name] || name;
  }

}

export class  ModalEmailField extends ModalField {
  constructor(name: string) {
     super(name);
     this.control = new FormControl('', [Validators.required, Validators.email] );
  }
}

export class ModalSelectField extends ModalField {
  constructor(name: string) {
     super(name);
     this.controlType = 'select';
     this.options = [
          {
            value: 'Стоянка',
            name: 'Стоянка'
          },
          {
            value: 'Торгующая организация',
            name: 'Торгующая организация'
          }
        ];
  }
}
