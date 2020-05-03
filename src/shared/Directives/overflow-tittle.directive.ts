import { AfterViewInit, Directive, ElementRef, Renderer2, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[ccOverflowTittle]'
})
export class OverflowTittleDirective implements AfterViewInit, OnDestroy {
  @Input() text: string;
  @Input() width: number;
  loadingTimeoutId;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.loadingTimeoutId = setTimeout(() => {
      if (this.el.nativeElement.offsetWidth < this.el.nativeElement.scrollWidth) {
        this.renderer.setAttribute(this.el.nativeElement, 'title', this.el.nativeElement.innerText);
      }
    });

  }

  ngOnDestroy() {
    if (this.loadingTimeoutId) {
      clearTimeout(this.loadingTimeoutId);
    }
  }
}
