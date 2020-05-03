import { Injectable } from '@angular/core';
import { HttpApiService } from '../../Core/Services/http-api.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/mergeMap';
import { GenericFile } from '../Models/Concrete/GenericFile.class';
import { IFileLoader } from '../Models/Abstract/FileLoader.interface';
import { Observable } from 'rxjs/Observable';
import { IAttachment } from '../Models/Abstract/Attachment.interface';

@Injectable()
export class FileUDService implements IFileLoader {

  private idQ$ = new Subject();

  constructor(private httpApiService: HttpApiService) {
    // TODO: Performance: bufferTimeout need to be replaced, since it spans event every 200ms
    this.idQ$.bufferTime(200)
      .filter(requests => Boolean(requests.length))
      .flatMap(requests => this.doRequest(requests.length),
        (request, ids) => ({request, ids}))
      .map((response) => {
        response.request
          .map((subscriber: Subject<number>, i) =>
            subscriber.next(response.ids[i]));
      })
      .subscribe();
  }

  upload(file: GenericFile) {
    const id = file.id;
    const fileU: File = file.file;
    const formData = new FormData();
    formData.append('name', 'files');
    formData.append('files', fileU, id);
    return <Observable<string[]>>this.httpApiService.putFormData('/files ', formData);
  }

  get(id, isThumbnail = false) {
    return this.httpApiService.getFile(`/files/${id}${isThumbnail ? '/thumbnail' : ''}`);
  }

  public getByCarId(id: string) {
    return this.httpApiService.get(`/files/info/${id}`);
  }

  public doRequest(count) {
    // TODO: move path to const
    return this.httpApiService.post('/files/create', {count});
  }

  public reserveId() {
    const subj = new Subject();
    this.idQ$.next(subj);
    return <Observable<string>>subj.take(1);
  }

  public reserveByName(data): Observable<string[]> {
    return this.httpApiService.post('/files/create/by_name', data);
  }

  public getByName(id: string): Observable<IAttachment[]> {
    return this.httpApiService.getFile(`/files/by_name/${id}`);
  }

  public newFile(file) {
    return new GenericFile(file, this);
  }

  public saveFile(fullName, data, type) {
    const blob = new Blob([data], { type: type });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fullName);
      return;
    }
    const dataBlob = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = dataBlob;
    link.download = fullName;
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(data);
    }, 100);
  }

}
