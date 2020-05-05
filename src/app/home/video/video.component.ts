import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  resolvedVideo: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resolvedVideo = this.route.snapshot.data.video[0].name;
    
    console.log('this.route.snapshot.data', this.route.snapshot.data)
  }

}