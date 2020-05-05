import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { PreComponent } from "./pre.component";

const routes: Routes = [{ path: '', component: PreComponent }];

@NgModule({
  imports: [CommonModule],
  declarations: [PreComponent],
  exports: [RouterModule]
})
export class PreModule {}
