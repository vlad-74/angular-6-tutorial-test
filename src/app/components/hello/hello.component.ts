import { Component, AfterViewInit, ViewChild, Renderer2, TemplateRef, ElementRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`p { font-family: Lato; font-size:13px;}`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() set isAdmin(value: boolean) {
      if (value) {
         this.view = this.viewContainerRef.createEmbeddedView(this._tpl);
         // вставился в конец компонента
         if (this.view2) {this.view2.destroy()};
      } else {
        this.view2 = this.viewContainerRef.createEmbeddedView(this._tpl2);
        // вставился в конец компонента
        if (this.view) {this.view.destroy()};
      }
   }

  @ViewChild("tpl1", {read: TemplateRef}) _tpl;
  @ViewChild("tpl2", {read: TemplateRef}) _tpl2;

  condition: boolean=true;
  private view: EmbeddedViewRef<Object>;
  private view2: EmbeddedViewRef<Object>;

  myContext = {$implicit: 'World', localSk: 'Svet'};
  myItems = {arr: ['Item 1', 'Item 2', 'Item 3']};

  constructor(
      private viewContainerRef: ViewContainerRef
   ) {}
}
