import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // <- добавлено

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BoldDirective } from "./directive/bold.directive";
import { MouseBoldDirective } from "./directive/mouse-bold.directive";
import { IfHasAccessDirective } from "./directive/if-has-access.directive";
import { BookItemComponent } from "./book-item/book-item.component";
import { AppService } from './app.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpService } from './http/http.service';
import { AuthInterceptor, ParamInterceptor } from './http/ht.interceptor';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BoldDirective,
    MouseBoldDirective,
    IfHasAccessDirective,
    BookItemComponent,
    FormComponent
  ],
  entryComponents: [BookItemComponent],
  bootstrap: [AppComponent],
  providers: [AppService, HttpService,
  HttpService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true // option. This is required and tells Angular that HTTP_INTERCEPTORS is an array of values, rather than a single value.
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }
  ]
})

export class AppModule {}
