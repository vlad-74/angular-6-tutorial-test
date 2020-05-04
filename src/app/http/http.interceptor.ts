import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, retry } from 'rxjs/operators';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('ПРЕЛОАДЕР - СТАРТ ЗАПРОСА');
      
    if (req.url.includes('jsonplaceholder.typicode.com')) {
        const paramReq = req.clone({ params: req.params.set('userId', '7') });

        // retry - Повторите определенное количество раз в случае возникновения ошибки.
        return next.handle(paramReq).pipe(
          retry(1),
          tap(evt => {
            if (evt instanceof HttpResponse) {
              if(evt.body && evt.status === 200){ console.log('evt.body', evt.body); console.log('ПРЕЛОАДЕР - ОКОНЧАНИЕ ЗАПРОСА'); }
            }
          }),
          catchError((err: any) => {
            
            let errorMessage = '';
            if (err.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${err.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
            }
            return throwError(errorMessage);

            // console.log('ПРЕЛОАДЕР - ОКОНЧАНИЕ ЗАПРОСА');
            // if(err instanceof HttpErrorResponse) {
            //   try {
            //     console.log('try - err instanceof HttpErrorResponse')
            //   } catch(e) {
            //     console.log('catch - err instanceof HttpErrorResponse', e)
            //   }
            // }
            // return of(err);

          }));
    } else {
        console.log('req - ', req);
        return next.handle(req);
    }
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // constructor(private auth: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const authHeader = this.auth.getToken();
    const authHeader = 'Bearer 1A2b3C4d5E6f7G8h9IAgBKClD';

    const authReq = req.clone({ headers: req.headers.set( 'Authorization', authHeader ) });
    console.log('authReq - ', authReq);
    return next.handle(authReq);
  }
}