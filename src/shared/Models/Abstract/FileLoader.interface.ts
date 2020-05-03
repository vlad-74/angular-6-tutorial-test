import { GenericFile } from '../Concrete/GenericFile.class';
import { Observable } from 'rxjs/Observable';

export interface IFileLoader {
  upload(file: GenericFile): Observable<string[]>;
  get(id: number, isThumbnail?): Observable<any>;
  reserveId(): Observable<string>;
}
