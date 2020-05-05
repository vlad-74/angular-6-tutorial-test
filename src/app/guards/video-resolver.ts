import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class VideoResolver implements Resolve<any> {
    public resolve() {
        return Observable.of([{name: 'tesla'}, {name: 'arrinera'}]);
    }
}
