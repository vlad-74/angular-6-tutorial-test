import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  // encapsulation: ViewEncapsulation.None // https://dzone.com/articles/what-is-viewencapsulation-in-angular
})
export class AppComponent {

  private url: string;

  constructor(private router: Router){
    router.events
      .pipe( filter(event => event instanceof NavigationEnd) )
      .subscribe( (event: NavigationEnd) => {this.url = event.url;} );
  }    
}
