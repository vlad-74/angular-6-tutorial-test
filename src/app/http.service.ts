import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';
      
@Injectable({providedIn: 'root'})
export class HttpService{
   constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/667676');
  }

}