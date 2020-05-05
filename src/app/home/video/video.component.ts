import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  resolvedVideo: any;
  
  constructor(router: Router) { }

  ngOnInit() {
   this.router.data
    .subscribe(
      (data) => {
      console.log('data', data)
      }
    );
  }

}