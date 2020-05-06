import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadComponent } from './preload.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: PreloadComponent }];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  declarations: [PreloadComponent],
  exports: [RouterModule]
})
export class PreloadModule { }