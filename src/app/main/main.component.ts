import { Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild, Renderer2, TemplateRef, ElementRef, EmbeddedViewRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { map, tap, take } from 'rxjs/operators';
import { BookItemComponent } from '../book-item/book-item.component';
import { HttpService} from '../http/http.service';
import {User} from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  @ViewChild("par", {read: ElementRef}) par: ElementRef;
  @ViewChild('book', {read: ViewContainerRef}) book: ViewContainerRef;

  @ViewChild('tmplC') tmplC: TemplateRef<any>;
  @ViewChild('tmplC2') tmplC2: TemplateRef<any>;

  showViewTemplate = true;
  liveTemplate: TemplateRef<any>;

  name = 'Angular';
  users: User[] = [];
  error:any;

  constructor(
      private renderer: Renderer2,
      private componentFactoryResolver: ComponentFactoryResolver,
      private httpService: HttpService
   ) {}

  ngOnInit(){   
    this.httpService.getData()
      .subscribe(
        data => {this.users = data.filter((item, i) => i<3 ); },
        er => {this.error = er.message; console.log('error - ngOnInit', er)}
      )
  }

  ngAfterViewInit(): void {
    let buttonElement = this.renderer.createElement('button');
    // const text = this.renderer.createText('Text');
    // this.renderer.appendChild(buttonElement, text);
    buttonElement.innerHTML = `renderer.createElement<br>ДИНАМИЧЕСКИЙ ngTemplateOutlet`

    this.renderer.listen(buttonElement, 'click', (event) => {this.toggleTemplateSelected();})

    this.renderer.insertBefore(
      this.par.nativeElement.parentNode, buttonElement, this.par.nativeElement
    );

    let inputElement = this.renderer.createElement('input');
    inputElement.value = 'renderer.createElement'
    this.renderer.setStyle(inputElement, 'width', '100%');
    this.renderer.appendChild(this.par.nativeElement.parentNode, inputElement);
  }

  toggleTemplateSelected() {
    this.showViewTemplate = !this.showViewTemplate;
    this.liveTemplate = this.showViewTemplate ? this.tmplC : this.tmplC2;
  }

  addBookDynamicComponent(){
    this.book.clear();

    let bookItemComponent = this.componentFactoryResolver.resolveComponentFactory(BookItemComponent);

    let bookItemComponentRef = this.book.createComponent(bookItemComponent);

    (<BookItemComponent>bookItemComponentRef.instance).value = {
      title: 'Great Expectations',
      author: 'Charles Dickens'
    }
  }
  
}