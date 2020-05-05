import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {HttpUser} from '../../models/user';
import { catchError, tap, map } from 'rxjs/operators';
      
@Injectable({providedIn: 'root'})
export class HttpService{
   constructor(private http: HttpClient) { }

  getData(): Observable<HttpUser[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(data=>{
            let userList = data;
            return userList.map(function(user:any) {
              return {name: user.username, phone: user.phone};
            });
          }
        ),
          catchError(err => {  
            console.log('err - ', err); 
            return throwError(err);
          }
        )
      )
  }

}