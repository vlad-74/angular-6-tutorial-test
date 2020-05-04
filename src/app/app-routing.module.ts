import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HelloComponent } from "./hello.component";

import { FormComponent } from './form/form.component';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule }   from '@angular/forms';

import { BoldDirective } from "./directive/bold.directive";
import { MouseBoldDirective } from "./directive/mouse-bold.directive";
import { IfHasAccessDirective } from "./directive/if-has-access.directive";

import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: MainComponent},
  { path: 'form', component: FormComponent},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule],
  declarations:[
    MainComponent,
    HelloComponent, 
    FormComponent,
    BoldDirective,
    MouseBoldDirective,
    IfHasAccessDirective,
    ErrorComponent,
    ],
  providers: []
})
export class AppRoutingModule { }