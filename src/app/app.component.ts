import { Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild, Renderer2, TemplateRef, ElementRef, EmbeddedViewRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { map, tap, take } from 'rxjs/operators';
import { BookItemComponent } from './book-item/book-item.component';
import { HttpService} from './http.service';
import {User} from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  // encapsulation: ViewEncapsulation.None // https://dzone.com/articles/what-is-viewencapsulation-in-angular
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("par", {read: ElementRef}) par: ElementRef;
  @ViewChild('book', {read: ViewContainerRef}) book: ViewContainerRef;

  @ViewChild('tmplC') tmplC: TemplateRef<any>;
  @ViewChild('tmplC2') tmplC2: TemplateRef<any>;

  showViewTemplate = true;
  liveTemplate: TemplateRef<any>;

  name = 'Angular';
  users = [];

  constructor(
      private renderer: Renderer2,
      private componentFactoryResolver: ComponentFactoryResolver,
      private httpService: HttpService
   ) {}

  ngOnInit(){   
    this.httpService.getData()
    .pipe(take(3))
    .subscribe(data => {
      console.log('data', data)
      this.users = data
    });
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
