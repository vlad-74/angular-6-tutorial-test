import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // <- добавлено

import { AppComponent } from "./app.component";

import { BookItemComponent } from "./book-item/book-item.component";
import { AppService } from './app.service';

import { HttpService } from './http/http.service';
import { AuthInterceptor, ParamInterceptor } from './http/http.interceptor';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule, AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BookItemComponent,
  ],
  entryComponents: [BookItemComponent],
  bootstrap: [AppComponent],
  providers: [AppService,
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
