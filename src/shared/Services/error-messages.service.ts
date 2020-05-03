import { Injectable } from '@angular/core';
import { ErrorMessages } from '../../Auth/Models/Consts/ErrorMessages';
import { IFieldModel } from '../Models/Abstract/fieldModel.interface';
import { IGroupFieldModel } from '../Models/Abstract/groupFieldModel.inteface';
import { DialogService } from './dialog.service';
import { Observable } from 'rxjs/Observable';
import { MESSAGES } from '../../../Global/messages.const';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { ServerErrors } from '../../Admin/Models/Const/ServerErrors.enum';

@Injectable()
export class ErrorMessagesService {

  constructor(private dialogService: DialogService) {
  }

  static getErrorObject(error: { type: string }) {
    return ErrorMessages[error.type];
  }

  static detectFieldError(errorField, errorObject, field: IFieldModel) {
    if (field.fieldName === errorField && field.control) {
      field.control.setErrors({serverError: errorObject.message});
      return true;
    }
    return false;
  }

  public processHttpError(error: HttpErrorResponse): Observable<any> {
    switch ( error.status) {
      case 403:
        return this.dialogService.alert({ message: MESSAGES.DIALOGS.FORBIDDEN })
        .afterClosed();
      case 413:
        return this.dialogService.alert({message: MESSAGES.DIALOGS.PAYLOAD_TOO_LARGE})
        .afterClosed();
      case 502:
        return this.dialogService.alert({message: MESSAGES.DIALOGS.BAD_GATEWAY})
        .afterClosed();
    }
    if (!error.error) {
      return this.dialogService.alert({message: MESSAGES.DIALOGS.UNEXPECTED_ERROR})
      .afterClosed();
    }
    switch (error.error.type) {
      case 'tokenExpiredException':
      case 'authTokenNotFoundException':
        return Observable.of(true).take(1);
      case 'accessDeniedException':
        return this.dialogService.alert({ message: MESSAGES.DIALOGS.ACCESS_DENIED })
          .afterClosed();
      default:
        return this.dialogService.alert({message: ServerErrors[error.error.type] || MESSAGES.DIALOGS.UNEXPECTED_ERROR})
          .afterClosed();
    }
  }

  public fieldModelSetError(fields: Array<IFieldModel | IGroupFieldModel>, error: { type: string }) {
    const errorObject = ErrorMessagesService.getErrorObject(error);
    let found = false;
    if (!errorObject) {
      return false;
    }
    const errorFields = errorObject.field.split(',');
    fields.forEach(field => {
      errorFields.forEach(errorField => {
        if (field.controlType === 'group') {
          (<IGroupFieldModel>field).fields.forEach(groupField => {
            if (ErrorMessagesService.detectFieldError(errorField, errorObject, groupField)) {
              found = true;
            }
          });
        } else {
          if (ErrorMessagesService.detectFieldError(errorField, errorObject, field)) {
            found = true;
          }
        }
      });
    });
    return found;
  }

}
