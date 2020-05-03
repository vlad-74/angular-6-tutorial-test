# angular-6-tutorial-test

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-6-tutorial-test)

В проекте отработано:
  1. ViewEncapsulation - проваливание стилей в дочерний компонент
  2. Динамический компонент - componentFactoryResolver
  3. Манипуляция с DOM
    3.1. Renderer
    3.2. ngTemplateOutlet
    3.3. Динамически добавить кнопку или инпут возле <p>:
      - # на <p> и @ViewChild и @ElementRef и createElement и renderer.listen и renderer.insertBefore или renderer.appendChild
    3.4. Логика отображения нескольких ng-template 
      - # на ng-template и @ViewChild и TemplateRef и EmbeddedViewRef и this.viewContainerRef.createEmbeddedView
    3.5. # и @ViewChild и viewContainerRef и createComponent
    3.6. ДИНАМИЧЕСКИЙ ngTemplateOutlet - @ViewChild И TemplateRef<any>
  4. ng-content - родительский контент в дочернем (вся логика в родителе)
  5. Структурная директива - ifHasAccess(templateRef и ViewContainerRef)
  6. Атрибутные директивы - bold & mouseBold (HostBinding и HostListener // host )