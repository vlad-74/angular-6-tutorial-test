import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BoldDirective } from "./directive/bold.directive";
import { MouseBoldDirective } from "./directive/mouse-bold.directive";
import { IfHasAccessDirective } from "./directive/if-has-access.directive";
import { BookItemComponent } from "./book-item/book-item.component";
import { AppService } from './app.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BoldDirective,
    MouseBoldDirective,
    IfHasAccessDirective,
    BookItemComponent
  ],
  entryComponents: [BookItemComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule {}
