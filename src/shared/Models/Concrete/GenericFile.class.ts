import { IFileLoader } from '../Abstract/FileLoader.interface';
import { FILE_STATUS } from '../Const/FileStatus.enum';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

export class GenericFile {
  public id;
  public status;
  public file: File;

  constructor(file: any = 0, private fileLoader: IFileLoader) {
    if (typeof file === 'number' || typeof file === 'string') {
      this.id = file;
      this.status = FILE_STATUS.READY;
    } else if (file instanceof File) {
      this.file = file;
      this.status = FILE_STATUS.NEW;
    } else {
      // TODO: Error object
      throw new Error('Unsupported file type');
    }
  }

  public async upload(id?: string): Promise<string[]> {
    this.status = FILE_STATUS.REQUESTEDID;
    if (id) {
      this.id = id;
    } else {
      this.id = await this.fileLoader.reserveId().toPromise();
    }
    this.status = FILE_STATUS.UPLOADING;
    const result = await this.fileLoader.upload(this).toPromise();
    this.status = FILE_STATUS.READY;
    this.file = undefined;
    this.id = result[0];
    return result;
  }

  public async get(isThumbnail?): Promise<Blob> {
    return this.fileLoader.get(this.id, isThumbnail).pipe(catchError(this.parseErrorBlob)).toPromise();
  }

  private  parseErrorBlob(err: HttpErrorResponse): Observable<any> {
    const reader: FileReader = new FileReader();

    const obs = Observable.create((observer: any) => {
      reader.onloadend = (e) => {
        observer.error(JSON.parse(reader.result));
        observer.complete();
      };
    });
    reader.readAsText(err.error);
    return obs;
  }

}
