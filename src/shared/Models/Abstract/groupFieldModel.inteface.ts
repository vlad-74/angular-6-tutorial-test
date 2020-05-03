import { IFieldModel } from './fieldModel.interface';

export interface IGroupFieldModel extends IFieldModel {
  classList?: Array<string>;
  fields: Array<IFieldModel>;
  selectable?: {
    isFieldSelected?: boolean;
    onFieldSelectChange?(value): void;
  };
}
