import { Component, ViewChild, ElementRef, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GenericFile } from '../../Models/Concrete/GenericFile.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'cc-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('player') player: ElementRef;
  public video;
  public hideControls = false;
  public isPlaying = false;

  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { video: GenericFile }) {
  }

  ngOnInit() {
    this.getVideo();
  }
  end() {
    this.hideControls = false;
    this.isPlaying = false;
  }
  play() {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.player.nativeElement.pause();
      return;
    }
    this.player.nativeElement.play();
    this.isPlaying = true;
    this.hideControls = true;
    this.player.nativeElement.addEventListener('ended', function () {
      this.displayControls = false;
    });
  }
  mouseover() {
    this.hideControls = false;
  }
  mouseleave() {
    if (this.isPlaying) {
      this.hideControls = true;
    }
  }
  fullscreen() {
    const player = this.player.nativeElement;
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen(); // Firefox
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  async getVideo() {
    const refile = await this.data.video.get();
    this.video = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(refile));
  }

  close() {
    this.dialogRef.close();
  }
}
