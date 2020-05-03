import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../Components/dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from '../Components/dialog-confirm/dialog-confirm.component';
import { DialogModalComponent } from '../Components/dialog-modal/dialog-modal.component';
import { GalleryComponent } from '../Components/gallery/gallery.component';
import { VideoComponent } from '../Components/video/video.component';
import { InspectionPlaceComponent } from '../../Main/Components/contract-summary/inspection-place/inspection-place.component';
import { EvaluationModalViewComponent } from '../../Main/Components/complaints-page/evaluation-modal-view/evaluation-modal-view.component';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  alert(data, customComponent?) {
    return this.dialog.open(customComponent || DialogAlertComponent, {data});
  }

  confirm(data, bool?, customComponent?) {
    if (bool) {
      return this.dialog.open(customComponent || DialogModalComponent, {data});
    } else {
      return this.dialog.open(customComponent || DialogConfirmComponent, {data});
    }
  }

  gallery(data) {
    return this.dialog.open(GalleryComponent, {data});
  }

  videoPlayer(data) {
    return this.dialog.open(VideoComponent, {data});
  }

  inspectionPlace(data) {
    return this.dialog.open(InspectionPlaceComponent, {data});
  }
  evaluationModalView(data) {
    return this.dialog.open(EvaluationModalViewComponent, {data});
  }
}
