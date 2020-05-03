import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericFile } from '../../Models/Concrete/GenericFile.class';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cc-photo-miniature',
  templateUrl: './photo-miniature.component.html',
  styleUrls: ['./photo-miniature.component.scss']
})
export class PhotoMiniatureComponent implements OnInit {

  @Input()
  photo: GenericFile;

  @Output()
  photoRemove = new EventEmitter();

  @Output()
  clickPhoto = new EventEmitter();

  public imgSrc;
  public errSrc = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.photo.id) {
      this.getImage();
    }
  }

  async getImage() {
    try {
      const refile = await this.photo.get(true);
      this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(refile));
    } catch (_) {
      if (_.type === 'unsupportedFileException') {
        this.errSrc = true;
      }
      if (_.type === 'storageException') {
        this.errSrc = true;
      }
    }
  }

  removePhoto(event) {
    event.stopPropagation();
    this.photoRemove.emit(this.photo);
  }

}
