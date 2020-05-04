import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {User} from './user';
import { catchError, tap, map } from 'rxjs/operators';
      
@Injectable({providedIn: 'root'})
export class HttpService{
   constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map(data=>{
            let userList = data;
            return userList.map(function(user:any) {
              return {name: user.userName, age: user.phone};
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