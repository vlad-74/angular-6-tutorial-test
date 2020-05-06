import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: CheckComponent }];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  declarations: [CheckComponent],
  exports: [RouterModule]
})
export class CheckModule { }