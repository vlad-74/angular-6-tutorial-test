import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ],
  // encapsulation: ViewEncapsulation.None // https://dzone.com/articles/what-is-viewencapsulation-in-angular
})
export class MainComponent {

  private url: string;

  constructor(){

  }    
}
