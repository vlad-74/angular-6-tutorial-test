import { FormControl } from '@angular/forms';

export interface IFieldModel {
  controlType: string;
  fieldName?: string;
  name?: string;
  control?: FormControl;
  label: string;
  required?: boolean;
  classList?: Array<string>;
  canShowPassword?: boolean;
  options?: Array<{ value; name }>;
  value?: any;
  maxLength?: number;
  max?: number;
  min?: number;
  placeholder?: string;
  floatLabel?: string;
  fields?: any;
  changeValid?: any;
  show?: boolean;
  selectable?: {
    isFieldSelected?: boolean;
    onFieldSelectChange?(value): void;
  };
}
