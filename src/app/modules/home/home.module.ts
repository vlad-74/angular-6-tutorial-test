import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { VideoComponent } from './video/video.component';

import { VideoResolver } from '../../guards/video-resolver';
import { VideoGuard } from '../../guards/video.guard';
import { ExitVideoGuard } from '../../guards/exit-video.guard';

const itemRoutes: Routes = [
  { path: 'video', 
    component: VideoComponent, 
    canActivate: [VideoGuard], 
    canDeactivate: [ExitVideoGuard], 
    resolve: { video: VideoResolver}
  }
];
const routes: Routes = [{ path: '', component: HomeComponent, children: itemRoutes }];

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, VideoComponent],
  providers: [VideoResolver, VideoGuard, ExitVideoGuard],
  exports: [RouterModule]
})

export class HomeModule { }
