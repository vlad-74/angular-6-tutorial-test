import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreloadComponent } from './preload.component';

const routes: Routes = [{ path: '', component: PreloadComponent}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreloadComponent],
  exports: [RouterModule]
})
export class PreloadModule { }