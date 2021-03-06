import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { MainComponent } from "./components/main/main.component";
import { HelloComponent } from "./components/hello/hello.component";
import { FormComponent } from "./components/form/form.component";
import { WebworkerComponent } from './components/webworker/webworker.component';
import { PushComponent } from "./components/push/push.component";
import { TooltipComponent } from './components/push/tooltip/tooltip.component';
import { ErrorComponent } from "./components/error/error.component";

import { BoldDirective } from "./directive/bold.directive";
import { MouseBoldDirective } from "./directive/mouse-bold.directive";
import { IfHasAccessDirective } from "./directive/if-has-access.directive";
import { CustomPreloadService } from "./services/custom-preload.service";

const routes: Routes = [
  { path: "", pathMatch: "full", component: MainComponent },
  { path: "form", component: FormComponent },
  { path: "form/:id", component: FormComponent },
  { path: "webworker", component: WebworkerComponent },
  { path: "push", component: PushComponent },
  { path: "preload", loadChildren: "./modules/preload/preload.module#PreloadModule", data: { preload: true } },
  { path: "home", loadChildren: "./modules/home/home.module#HomeModule" },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      preloadingStrategy: CustomPreloadService
    })
  ],
  exports: [RouterModule],
  declarations: [
    MainComponent,
    HelloComponent,
    FormComponent,
    WebworkerComponent,
    PushComponent,
    TooltipComponent,
    BoldDirective,
    MouseBoldDirective,
    IfHasAccessDirective,
    ErrorComponent
  ],
  providers: []
})
export class AppRoutingModule {}
