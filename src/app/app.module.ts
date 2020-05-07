import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppComponent } from "./app.component";

import { BookItemComponent } from "./components/book-item/book-item.component";

import { IfHasAccessService } from './services/if-has-access.service';
import { HttpService } from './services/http/http.service';
import { AuthInterceptor, ParamInterceptor } from './services/http/http.interceptor';

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
  providers: [IfHasAccessService,
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
