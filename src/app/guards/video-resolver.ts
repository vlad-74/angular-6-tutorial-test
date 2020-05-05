import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { of} from 'rxjs';
  import { Injectable } from '@angular/core';

  import { HttpService} from '../services/http/http.service';


  @Injectable()
  export class VideoResolver implements Resolve<any> {

    constructor(private httpService: HttpService) {}

    resolve() {
      return of([{name: 'Resolver'}]);
      // return this.httpService.getData()
    }
  }
