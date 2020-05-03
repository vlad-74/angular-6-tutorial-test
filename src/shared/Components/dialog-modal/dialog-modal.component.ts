import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IFieldModel } from '../../Models/Abstract/fieldModel.interface';
import { FormState } from '../../Models/Abstract/formState.interface';
import { DialogService } from '../../../Shared/Services/dialog.service';

import { ModalField, ModalEmailField, ModalSelectField } from '../../Models/Concrete/ModalField.class';

@Component({
  selector: 'cc-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent implements OnInit {

  public Empty = false;
  public nameEmpty = false;
  public addressEmpty = false;
  public typeEmpty = false;

  public infoForm: FormGroup;
  public formState: FormState = {submitted: false};

  public fields: Array<IFieldModel> = [];

  constructor(public dialogRef: MatDialogRef<DialogModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initFields(this.data);

    this.infoForm = new FormGroup(this.fields.reduce((group, field) => {
      group[field.fieldName] = field.control;
      return group;
    }, {}));

    this.setValue();
  }

  initFields(data: any) {
    let  ctrl;

    for (const key in this.data) {
      if (key && key !== 'regionId' && key !== 'id') {
        if (key === 'email') {
          ctrl = new ModalEmailField(key);
        } else if (key === 'type') {
          ctrl = new ModalSelectField(key);
        } else {
          ctrl = new ModalField(key);
        }
      this.fields.push(ctrl);
      }
    }
  }

  setValue() {
    for (const key in this.data) {
      if (this.infoForm.controls[key]) {
        this.infoForm.controls[key].setValue(this.data[key]);
      }
    }

  }

  public confirmDialog(bool: boolean) {
    const obj = {};

    if (bool) {
      if (this.infoForm.invalid) {
        this.formState.submitted = true;

        Object.keys(this.infoForm.controls).forEach (
          (key) => {
            this.infoForm.controls[key].markAsTouched();
          }
        );
        return ;
      }

      for (const key in this.data) {
        if (this.infoForm.controls[key]) {
          obj[key] = this.infoForm.controls[key].value;
        } else {
          obj[key] = this.data[key];
        }
      }
      this.dialogRef.close(obj);
    } else {
      this.dialogRef.close();
    }
  }

}
