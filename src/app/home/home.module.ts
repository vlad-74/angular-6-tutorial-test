import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const itemRoutes: Routes = [{ path: 'items', component: ItemsComponent}];

const routes: Routes = [{ path: '', component: HomeComponent, children: itemRoutes }];

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, ItemsComponent],
  exports: [RouterModule]
})

export class HomeModule { }
