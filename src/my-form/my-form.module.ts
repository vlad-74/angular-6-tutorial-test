import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyFormComponent],
  exports: [MyFormComponent],
})

export class MyFormModule { }