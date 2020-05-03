import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DialogService } from '../../../Shared/Services/dialog.service';

@Component({
  selector: 'cc-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {
  confirmButton: string;
  cancelButton: string;
  constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.confirmButton = this.data.confirmButton || 'Удалить';
    this.cancelButton = this.data.cancelButton || 'Отмена';
  }

  public confirmDialog(bool: boolean) {
    this.dialogRef.close(bool);
  }

}
