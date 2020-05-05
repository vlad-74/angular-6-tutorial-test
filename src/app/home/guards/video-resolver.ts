import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class VideoResolver implements Resolve<any> {
 constructor() {}

  resolve() {
    return of('Hello Alligator!');
  }
}
