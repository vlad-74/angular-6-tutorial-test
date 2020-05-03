import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form/my-form.component';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule }   from '@angular/forms'; 
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    
  ],
  declarations: [MyFormComponent],
  exports: [MyFormComponent],
})

export class MyFormModule { }
