import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('jsonplaceholder.typicode.com')) {
        const paramReq = req.clone({ params: req.params.set('userId', '7') });

        return next.handle(paramReq).pipe(
          tap(evt => {
            if (evt instanceof HttpResponse) {
              if(evt.body && evt.status === 200){ console.log('evt.body', evt.body) }
            }
          }),
          catchError((err: any) => {
              if(err instanceof HttpErrorResponse) {
                  try {
                    console.log('try - err instanceof HttpErrorResponse')
                  } catch(e) {
                    console.log('catch - err instanceof HttpErrorResponse', e)
                  }
              }
              return of(err);
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