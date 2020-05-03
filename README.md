# angular-6-tutorial-test

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-6-tutorial-test)

В проекте отработано:
  1. ViewEncapsulation - проваливание стилей в дочерний компонент
  2. Динамический компонент - componentFactoryResolver
  3. Манипуляция с DOM
    3.1. Renderer
    3.2. Отображение контекста ngTemplateOutlet в ng-template
      - # на ng-template и ngTemplateOutlet + context
    3.4. Логика отображения нескольких ng-template 
      - # на ng-template и @ViewChild и TemplateRef и EmbeddedViewRef и this.viewContainerRef.createEmbeddedView
    3.3. Динамически добавить кнопку или инпут возле <p>:
      - # на <p> и @ViewChild и @ElementRef и createElement и renderer.listen и renderer.insertBefore или renderer.appendChild
    3.5. ДИНАМИЧЕСКИЙ ngTemplateOutlet - логика отображения того или иного ng-template
      - # на ng-template и *ngTemplateOutlet='ПЕРЕМЕННАЯ С ТИПОМ: TemplateRef<any>' и @ViewChild
    3.6. ДИНАМИЧЕСКИЙ компонент
      - # на ng-template и @ViewChild и ViewContainerRef и componentFactoryResolver.resolveComponentFactory и createComponent и (<BookItemComponent>bookItemComponentRef.instance).value
  4. ng-content - родительский контент в дочернем (вся логика в родителе)
  5. Структурная директива с параметрами - ifHasAccess(templateRef и ViewContainerRef)
  6. Атрибутные директивы с параметрами - bold & mouseBold (HostBinding и HostListener // host )