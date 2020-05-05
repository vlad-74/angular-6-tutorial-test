import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    let modules: any = ['preload'];

    if(modules.includes(route.path)){
      return load();
    }else{
      return of(null);
    }
  }
}