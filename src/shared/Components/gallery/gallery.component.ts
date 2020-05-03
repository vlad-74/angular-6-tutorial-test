import { Component, Inject, Input, OnInit } from '@angular/core';
import { GenericFile } from '../../Models/Concrete/GenericFile.class';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'cc-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public loadedImages = [];
  public selectedIndex = 0;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<GalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { photos: GenericFile[], selected: number, index: number }
  ) {
  }

  ngOnInit() {
    if (this.data.index) { this.selectedIndex = this.data.index; }
    this.getImages();
  }

  async getImages() {
    for (let i = 0; i < this.data.photos.length; i++) {
      if (this.data.photos[i].id === this.data.selected) {
        this.selectedIndex = i;
      }
      const refile = await this.data.photos[i].get();
      const file = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(refile));
      this.loadedImages.push(file);
    }
  }

  next() {
    if (this.selectedIndex + 1 === this.data.photos.length) {
      return this.selectedIndex = 0;
    }
    this.selectedIndex++;
  }

  prev() {
    if (this.selectedIndex === 0) {
      return this.selectedIndex = this.data.photos.length - 1;
    }
    this.selectedIndex--;
  }

  close() {
    this.dialogRef.close();
  }
}
