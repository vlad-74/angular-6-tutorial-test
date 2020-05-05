import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs";
import {ComponentCanDeactivate} from '../guards/exit-video.guard';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit, ComponentCanDeactivate { 
  resolvedVideo: any;
  saved: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resolvedVideo = this.route.snapshot.data.video[0].name;
  }


  save(){
    this.saved = true;
  }
    
  canDeactivate() : boolean | Observable<boolean>{
    if(!this.saved){
        return confirm("Вы хотите покинуть страницу?");
    }
    else{
        return true;
    }
  }

}