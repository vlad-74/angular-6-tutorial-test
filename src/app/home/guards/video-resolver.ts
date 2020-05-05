import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { Observable} from 'rxjs';
  import { Injectable } from '@angular/core';

  import { HttpService} from '../../http/http.service';


  @Injectable()
  export class VideoResolver implements Resolve<any> {

    constructor(private httpService: HttpService) {}

    resolve() {
      return this.httpService.getData()
    }
  }
